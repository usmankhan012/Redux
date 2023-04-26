import React from 'react';
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../assets/ImagePath';
import Headortop from '../common/Headortop';
import OTPTextInput from 'react-native-otp-textinput';




const Edilotpverify = () => {
    return (

        <View style={{ flex: 1, backgroundColor: '#4FDBF4', padding: 10 }}>
            <View style={{ alignItems: 'center' }}>
                <Headortop
                    img={ImagePath.backarrow}
                    higt={40}
                    width={'100%'}
                    bgclor={'#4FDBF4'}
                    tntclr={'white'}
                    text={'Email Verify'}
                    color={'white'}
                    fontsize={18}
                    fontwait={'bold'}

                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 60, }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', }}>2 Step Verification</Text>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 17 }}>A 4-digit verification code {'\nwas just sent to ●●●●●●@gmail.com'}</Text>
            </View>


            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <OTPTextInput
                    textInputStyle={{ borderWidth: 1, backgroundColor: '#00B4C7', color: 'white', borderBottomWidth: 0, height: 70, width: 60, fontsize: 35 }}
                />
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'center', top: 15 }}>
                <Text>Complete!</Text>
                <Image style={{ height: 20, width: 20, resizeMode: 'contain', left: 10 }} source={ImagePath.comlit} />
            </View>

            <View style={{flexDirection:'row',alignSelf:'center',marginTop:80}}>
                <Text style={{fontSize:17,color:'white'}}>Didn’t receive an email?</Text>
                <TouchableOpacity>
                <Text style={{fontSize:17,color:'#01B7D8'}}> Resend Code</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={{height:70,width:'70%',backgroundColor:'#00B4C7',borderRadius:40,alignSelf:'center',marginTop:80,justifyContent:'center'}}>
<Text style={{fontSize:20,color:'white',textAlign:'center',}}>Next</Text>
            </TouchableOpacity>
        </View>


    )
}

export default Edilotpverify;