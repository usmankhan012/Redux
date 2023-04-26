import React, { useEffect } from 'react';
import { StatusBar, Text, View,Image, TouchableOpacity } from 'react-native';
import ImagePath from '../assets/ImagePath';




const Getstart = ({route}) => {
    useEffect(()=>{
        
    })
  return (
    <View style={{ flex: 1, }}>

<Image style={{height:500,width:'100%'}} source={ImagePath.getstartimg}/>

<View style={{backgroundColor:'#35B0C6',height:250,borderTopRightRadius:40,borderTopLeftRadius:40,marginTop:-20,alignItems:'center'}}>
<TouchableOpacity style={{backgroundColor:'skyblue',width:'70%',padding:25,borderRadius:40,marginTop:20}}>
    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Get Started</Text>
</TouchableOpacity>


<TouchableOpacity style={{marginTop:20}}>
    <Text style={{color:'white',fontSize:20,}}>Login</Text>
</TouchableOpacity>
</View>
    </View>

  );
}

export default Getstart;