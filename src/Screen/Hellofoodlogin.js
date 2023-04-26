import React, { useState } from 'react';
import { AsyncStorage, StatusBar, Text, TextInput, View, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { connect } from 'react-redux';

import ImagePath from '../assets/ImagePath';
import apiName from '../common/apiName';
import { ActionsLogin } from '../Redux/actions/ActionsApi';
// import Asyenkstorgee from '../common/Asyenkstorgee';




const Hellofoodlogin = (props) => {

    const [hide, sethide] = useState()

    const [password, setpasswordd] = useState('Usman2@63831')
    const [email, setemail] = useState("vaaww170@yopmail.com")

    const btn = () => {
        sethide(!hide)
    }

    const loginapi = async () => {

        let rss = {
            device_token: '12345678',
            password: password,
            email: email,

        }
        const Response = await props.ActionsLogin(apiName.login, 'POST', rss)
        console.log("Response", Response);
        if(Response.data.status==true){
props.navigation.navigate('Hellofoodapi')
        }

    }
    return (
        <ScrollView style={{ flex: 1, padding: 10 }}>

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="yellow" translucent={false} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Image style={{ height: 170, width: 400, resizeMode: 'contain' }} source={ImagePath.foodicone} />
            </View>


            <View style={{ marginTop: 30 }}>
                <TextInput style={{ padding: 18, backgroundColor: '#ccc6', borderRadius: 15, fontSize: 18, paddingLeft: 40 }}
                    placeholder="password"
                    placeholderTextColor={'black'}
                    secureTextEntry={hide ? true : false}
                    onChangeText={(text) => setpasswordd(text)}
                    value={password}
                />
                <Image style={{ height: 25, width: 25, position: 'absolute', top: 19, left: 10, resizeMode: 'contain' }} source={ImagePath.passwordicone} />
                <TouchableOpacity onPress={() => { btn() }}>
                    <Image style={{ height: 30, width: 30, position: 'absolute', top: -45, right: 10, resizeMode: 'contain' }} source={ImagePath.eyeicone} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 30 }}>
                <TextInput style={{ padding: 18, backgroundColor: '#ccc6', borderRadius: 15, fontSize: 18, paddingLeft: 40 }}
                    placeholder="Phone_number"
                    placeholderTextColor={'black'}
                    onChangeText={(text) => setemail(text)}
                    value={email}
                />
                <Image style={{ height: 30, width: 30, position: 'absolute', top: 18, left: 10, resizeMode: 'contain' }} source={ImagePath.phoneicone} />
            </View>

            <TouchableOpacity>
                <Text style={{ fontSize: 20, textAlign: 'right', top: 10 }}>Forgot your password?</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ padding: 20, width: '80%', backgroundColor: 'rgba(189, 0, 0, 0.8)', marginTop: 38, marginLeft: 40, borderRadius: 20 }} onPress={() => loginapi()}>

                <Text style={{ fontSize: 30, color: 'white', alignSelf: 'center' }}>SIGN IN</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 20, marginTop: 15, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>--------------- or --------------</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: 55, width: 55, borderRadius: 50, margin: 30, tintColor: 'rgba(203, 13, 76, 0.8)' }} source={ImagePath.facebookcone} />
                <Image style={{ height: 45, width: 50, borderRadius: 50, resizeMode: 'contain' }} source={ImagePath.googleicone} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, }}>Don't have an account?</Text>
                <TouchableOpacity >
                    <Text style={{ color: 'rgba(203, 13, 76, 0.8)', marginBottom: 30, fontSize: 15 }}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const mapStateToProps = (state) => ({
    data: state,
});
const mapDispatchToProps = {
    ActionsLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hellofoodlogin);