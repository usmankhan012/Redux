import React, { useEffect } from 'react';
import { StatusBar, Text, View,Image } from 'react-native';
import ImagePath from '../assets/ImagePath';




const Start = () => {

    useEffect(()=>{
        
    })
  return (
    <View style={{ flex: 1, }}>

<Image style={{flex:1}} source={ImagePath.getstartimg}/>

    </View>

  );
}

export default Start;