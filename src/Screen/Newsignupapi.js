import React from 'react';
import { useState } from 'react';
import { StatusBar, Text, View ,Image, TextInput, TouchableOpacity} from 'react-native';
import ImagePath from '../assets/ImagePath';




const Newsignupapi = () => {

    const[hide,sethide]= useState()

    const hidebtn=()=>{
        sethide(!hide)
    }
  return (

    <View style={{ flex: 1, }}>
<Image style={{height:300,width:400,resizeMode:'contain',marginTop:-50}} source={ImagePath.foodicone}/>

<View style={{alignItems:'center'}}>
<TextInput style={{padding:14,width:'90%',backgroundColor:'#ccc9',borderRadius:15,fontSize:18,paddingLeft:40,fontWeight:'bold'}} placeholder="Phone Number"/>
<Image style={{height:30,width:30,resizeMode:'contain',position:'absolute',left:30,top:13}} source={ImagePath.phoneicone}/>
</View>

<View style={{alignItems:'center',marginTop:30}}>
<TextInput style={{padding:14,width:'90%',backgroundColor:'#ccc9',borderRadius:15,fontSize:18,paddingLeft:45,fontWeight:'bold'}}
 placeholder="Password"
 secureTextEntry={hide? false:true }
/>
<Image style={{height:20,width:20,resizeMode:'contain',position:'absolute',left:35,top:18}} source={ImagePath.passwordicone}/>
<TouchableOpacity style={{position:'absolute',right:30,top:18}} onPress={()=>hidebtn(!hide)}>
<Image style={{height:25,width:25,}} source={ImagePath.eyeicone}/>
</TouchableOpacity>
</View>
<TouchableOpacity>
<Text style={{textAlign:'right',right:16,top:10,fontWeight:'600',fontSize:15}}>Forgot your password?</Text>

</TouchableOpacity>
<TouchableOpacity style={{width:'90%',backgroundColor:'orange',padding:20,marginTop:25,marginLeft:20,borderRadius:20}}>
    <Text style={{fontSize:25,textAlign:'center'}}>SIGN IN</Text>
</TouchableOpacity>

<Text style={{fontSize:20,textAlign:'center',marginTop:20}}>----------or-----------</Text>
<View style={{flexDirection:'row',justifyContent:'center',top:10}}>
<Image style={{height:60,width:60,}} source={ImagePath.facebookcone}/>
<Image style={{height:50,width:50,resizeMode:'contain',top:3,left:15}} source={ImagePath.googleicone}/>
</View>

<TouchableOpacity style={{marginTop:20}}>
    <Text style={{fontSize:20,color:'blue',textAlign:'center'}}>Sign up?</Text>
</TouchableOpacity>


    </View>

    

  );
}

export default Newsignupapi;