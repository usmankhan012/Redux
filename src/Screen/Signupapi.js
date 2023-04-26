import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Signupapi = (props) => {
  const [name, setname] = useState('saddam')
  const [email, setemail] = useState('sadd445k4555d4u123@gmail.com')
  const [password, setpassword] = useState('87654321')
  const [phonenumber, setphonenumber] = useState('74144234434926976')

  const Signupbtn = async () => {

    let saddam = await fetch('https://pixelt.in/shreemobile/public/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone_number: phonenumber,
        device_token: '12345678',
        device_id: '12345678'
      })
    });
    let rahman = await saddam.json()
    console.log('check', rahman)
    let sss = {
      otp: rahman.data.otp,
      userId: rahman.data.userId,
    }
    if (rahman.status) { props.navigation.navigate('Otp', { sendOtp: sss }) }

    else {
      console.log('fffff', rahman)
    }

  }

  return (
    <View style={{ padding: 15 }}>
      <TextInput style={{ borderBottomColor: "gray", borderWidth: 1, marginTop: 20, borderRadius: 20 }} placeholder="name"
        onChangeText={(saddu) => setname(saddu)}
        value={name}
      />
      <TextInput style={{ borderWidth: 1, marginTop: 20, borderRadius: 20 }} placeholder="Email"
        onChangeText={(saddu) => setemail(saddu)}
        value={email}
      />
      <TextInput style={{ borderWidth: 1, marginTop: 20, borderRadius: 20 }} placeholder="password"
        onChangeText={(saddu) => setpassword(saddu)}
        value={password}
      />
      <TextInput style={{ borderWidth: 1, marginTop: 20, borderRadius: 20 }} placeholder="mobilenumber"
        onChangeText={(saddu) => setphonenumber(saddu)}
        value={phonenumber}
      />

      <TouchableOpacity onPress={() => Signupbtn('')}>
        <Text style={{ backgroundColor: "blue", color: "white", marginTop: 20, textAlign: 'center', fontSize: 22, padding: 10, borderRadius: 20 }}>Register</Text>
      </TouchableOpacity>



    </View>
  )

}
export default Signupapi;