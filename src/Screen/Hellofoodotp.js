import React, { useState } from 'react';
import { Text, View, StatusBar, otp, TouchableOpacity } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { connect } from 'react-redux';
import apiName from '../common/apiName';
import { Actionotp } from '../Redux/actions/ActionsApi'


const Hellofoodotp = (props) => {

    const [otp, setotp] = useState('')
    const [email, setemail] = useState(props.route.params.userdata.email)
    const [otpvetrfey, setotpvetrfey] = useState(props.route.params.userdata.otp)

    const otppi = async () => {

        let body = {
            otp: otp,
            email: email

        }
        let Response = await props.Actionotp(apiName.otpverify, 'POST', body)
        console.log(Response);
    }



    return (

        <View style={{ flex: 1, marginTop: 30 }}>

            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="yellow" translucent={false} />
            <Text style={{ fontSize: 40, color: 'black', fontWeight: 'bold', marginTop: 20 }}>OTP</Text>
            <OTPTextInput
                inputCount={4}
                tintColor='black'
                offTintColor='gray'
                containerStyle={{ fontSize: 30 }}
                textInputStyle={{ height: 80, width: 60 }}
                handleTextChange={(text) => setotp(text)}
                defaultValue={otp}
            />
            <TouchableOpacity>
                <Text style={{ color: 'blue', fontSize: 18, textAlign: 'right', top: 10, right: 10 }}>Resend otp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '70%', backgroundColor: 'blue', padding: 20, borderRadius: 30, marginLeft: 60, marginTop: 50 }} onPress={() => { otppi() }}>
                <Text style={{ color: 'white', fontSize: 25, textAlign: 'center', }}>   Verfiy</Text>
            </TouchableOpacity>
        </View>
    );
}
const mapStateToProps = (state) => ({
    data: state,
});
const mapDispatchToProps = {
    Actionotp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Hellofoodotp);