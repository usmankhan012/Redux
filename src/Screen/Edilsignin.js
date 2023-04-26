import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import ImagePath from '../assets/ImagePath';




const Edilsignin = () => {
    const [hide, sethide] = useState()

    useEffect(() => {

    })

    const hidebtn = () => {
        sethide(!hide)
    }
    return (
        <View style={{ flex: 1, }}>


            <ImageBackground style={{ height: 500, }} source={ImagePath.getstartimg} >


                <View style={{ justifyContent: 'flex-end', flex: 1, bottom: 60 }}>


                    <View style={{ alignItems: 'center' }}>


                        <TextInput style={{ backgroundColor: '#00B4C7', padding: 20, width: '80%', fontSize: 18, paddingLeft: 50, color: 'white', fontSize: 18 }}
                            placeholder="Email Addresss"
                            placeholderTextColor={'white'}
                        />
                        <Image style={{ position: 'absolute', left: 50, top: 18, height: 30, width: 30, resizeMode: 'contain' }} source={ImagePath.emailicn} />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>


                        <TextInput style={{ backgroundColor: '#00B4C7', padding: 20, width: '80%', paddingLeft: 60, color: 'white', fontSize: 18 }}
                            secureTextEntry={hide ? false : true} />
                        <Image style={{ position: 'absolute', left: 55, top: 18, height: 30, width: 30, resizeMode: 'contain' }} source={ImagePath.lock} />
                        <TouchableOpacity style={{ position: 'absolute', right: 55, top: 18, }} onPress={() => hidebtn()}>
                            <Image style={{ height: 30, width: 30, resizeMode: 'contain' }} source={ImagePath.eyefill} />
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground>

            <View style={{ backgroundColor: '#477E78', height: 250, borderTopRightRadius: 40, borderTopLeftRadius: 40, marginTop: -20 }}>
                <TouchableOpacity style={{ backgroundColor: 'skyblue', width: '70%', padding: 25, borderRadius: 40, marginTop: -30, alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Sign In</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{ marginTop: 20 }}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Forgot Password?</Text>
                </TouchableOpacity>


                <Text style={{ color: 'white', fontSize: 18, left: 20, top: 20 }}>Sign In With Social Media</Text>



                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 40 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                        <Image style={{ height: 30, width: 30, marginHorizontal: 10 }} source={ImagePath.facebook} />
                        <Text style={{ color: 'white' }}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                        <Image style={{ height: 30, width: 30, marginHorizontal: 10 }} source={ImagePath.twiter} />
                        <Text style={{ color: 'white' }}>Twiter</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '30%' }}>
                        <Image style={{ height: 30, width: 30, marginHorizontal: 10 }} source={ImagePath.googl} />
                        <Text style={{ color: 'white' }}>Google</Text>
                    </TouchableOpacity>
                </View>

            </View>



        </View>

    );
}

export default Edilsignin;