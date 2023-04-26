import React, { useState } from 'react';
import { Text, StatusBar, TouchableOpacity, ImageBackground, View, Modal } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput'

const Otp = (props) => {
    console.log('-----otpscreen-----', props.route.params.sendOtp)
    console.log('-----otpscreen-otp check----', props.route.params.sendOtp.otp)
    const [useridss, setuser_id] = useState(props.route.params.sendOtp.user_id)
    const [OTP, setOtp] = useState(props.route.params.sendOtp.otp)

    const [otp, setotp] = useState('')

    const otpbtn = async () => {
        if (otp == OTP) {
            const saddam = await fetch('https://pixelt.in/shreemobile/public/api/verify-otp-verification-code', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: useridss,
                    otp: otp,
                    device_token: '12345678',
                })
            })
            const rahman = await saddam.json()
            console.log('ffff', rahman)
            if (rahman.status) {
                props.navigation.navigate('Loginapi')
            }
            else {
                alert("invalid")
            }

        }
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 33 }}>Plz Enter Your Otp!</Text>
            <OTPTextInput
                handleTextChange={(text) => setotp(text)}
                defaultValue={otp}
                inputCount={6}
                tintColor="red"
                offTintColor="blue"
                // inputCellLength={6}
                containerStyle={{ backgroundColor: 'yellow', }}
                textInputStyle={{ width: 30, color: 'blue' }}
            />

            <TouchableOpacity onPress={() => otpbtn()}>
                <Text style={{ fontSize: 33, backgroundColor: 'red', textAlign: 'center', color: 'white', marginTop: 20 }}>Register</Text>
            </TouchableOpacity>
        </View>

    );
}

export default Otp