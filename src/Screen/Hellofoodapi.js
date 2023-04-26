import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
import ImagePath from '../assets/ImagePath';
import { connect } from 'react-redux';
import apiName from '../common/apiName';
import { Validators } from '../common/Validetors';
import { Actionssign } from '../Redux/actions/ActionsApi'
import SimpleToast from 'react-native-simple-toast';
import Asyenkstorgee from '../common/Asyenkstorgee';
import Lodar from '../common/Lodar';



const Hellofoodapi = (props) => {

    const [name, setname] = useState("vahid");
    const [email, setemail] = useState("vaaww170@yopmail.com");
    const [phone_number, setphone_number] = useState("82920330920");
    const [password, setpassword] = useState("Usman2@63");
    const [loder, setloder] = useState(false)

    const signUpApi = async () => {


        if (Validators.checkRequire("Name", name) &&
            Validators.checkEmail("Email", email) &&
            // Validators.checkStreet("Password", 7, 15, password) &&

            Validators.checkNumber("Number", 7, 15, phone_number)
        ) {
            setloder(true)

            let body = {
                username: name,
                email: email,
                password: password,
                mobile: phone_number
            }


            let Response = await props.Actionssign(apiName.sign, 'POST', body)

            console.log('response------', Response)

            if (Response.data.status == true) {
                Asyenkstorgee.setData('token', Response.data.data.token)

                props.navigation.navigate('Hellofoodotp', { userdata: Response.data.data })
                setloder(false)
            }
            else {
                console.log('please try again')
                setloder(false)
            }
            setloder(false)
        }


    }


    return (
        <View style={{ flex: 1, }}>


            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="rgba(243, 13, 94, 0.97)" translucent={false} />
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Image style={{ height: 170, width: 400, resizeMode: 'contain' }} source={ImagePath.foodicone} />
            </View>
            <View style={{ padding: 20 }}>
                <Text style={{ color: 'black', left: 10 }}>name</Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 20, top: 10, paddingLeft: 15 }}
                    placeholder="name"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setname(text)}
                    value={name}

                />

            </View>


            <View style={{ padding: 20 }}>
                <Text style={{ color: 'black', left: 10 }}>Email</Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 20, top: 10, paddingLeft: 15, }}
                    placeholder="Email"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setemail(text)}
                    value={email}

                />

            </View>



            <View style={{ padding: 20 }}>
                <Text style={{ color: 'black', left: 10 }}>password</Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 20, top: 10, paddingLeft: 15 }}
                    placeholder="Password"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setpassword(text)}
                    value={password}


                />

            </View>


            <View style={{ padding: 20 }}>
                <Text style={{ color: 'black', left: 10 }}>phone_number</Text>
                <TextInput style={{ borderWidth: 1, borderRadius: 20, top: 10, paddingLeft: 15 }}
                    placeholder="phone_number"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setphone_number(text)}
                    value={phone_number}

                />

            </View>

            <TouchableOpacity style={{ height: 60, width: '40%', backgroundColor: 'blue', borderRadius: 20, alignItems: 'center', justifyContent: 'center', marginLeft: 100, marginTop: 30 }} onPress={() => signUpApi()}>
                <Text style={{ fontSize: 20, color: 'white' }}>next</Text>
            </TouchableOpacity>
            <Lodar loderss={loder} />

        </View>
    );
}

const mapStateToProps = (state) => ({
    data: state,
});
const mapDispatchToProps = {
    Actionssign,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hellofoodapi);