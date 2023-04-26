import React from 'react';
import { StatusBar, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ImagePath from '../assets/ImagePath';
import Headortop from '../common/Headortop';




const Edilforgotpassword = () => {
    return (

        <View style={{ flex: 1, backgroundColor: '#4FDBF4' }}>
            <View style={{ alignItems: 'center' }}>
                <Headortop

                    higt={60}
                    width={'100%'}

                    img={ImagePath.backarrow}
                    text={'Forgot Password'}
                    fontsize={20}
                    color={'white'}
                    tntclr={'white'}
                />
            </View>


            <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Image style={{ height: 250, width: 250 }} source={ImagePath.group} />
            </View>

            <Text style={{textAlign:'center',color:'white',fontSize:18}}>Enter your register email address{'\nbelow ro resive password  reset instruction'}
                    
            </Text>

            <View style={{alignItems:'center',marginTop:30}}>
                <TextInput
                style={{width:'80%',backgroundColor:'#00B4C7',padding:20,borderRadius:10,fontSize:18}}
                placeholder="Email Address"
                placeholderTextColor={'white'}
                />

            </View>

            <TouchableOpacity style={{height:70,width:'70%',backgroundColor:'#62D5CC',borderRadius:30,alignSelf:'center',marginTop:70}}>
<Text style={{textAlign:'center',top:20,fontSize:18,color:'white'}}>Send Otp</Text>
            </TouchableOpacity>


        </View>


    );
}

export default Edilforgotpassword;