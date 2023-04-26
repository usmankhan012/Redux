
import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../assets/ImagePath';

 function Headortop(props) {
  return (

    <View style={{ height: props.higt, width: props.width, backgroundColor: props.bgclor, flexDirection: 'row' }}>
      <TouchableOpacity style={{ width: '30%', justifyContent: 'center' }}>

        <Image style={{ height:30,width:30,resizeMode: 'contain', marginLeft: 20,tintColor:props.tntclr }} source={props.img} />


      </TouchableOpacity>
      <View style={{width:'40%'}}>
        <Text style={{textAlign:'center',fontSize:props.fontsize,top:10,color:props.color,fontWeight:props.fontwait}}>{props.text}</Text>
      </View>

      <TouchableOpacity style={{ width: '30%', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

        <Image style={{ height: 20, width: 20, tintColor: 'balck', marginRight: 20, resizeMode: 'contain' }} source={props.img2} />

        <Image style={{ height: 20, width: 20, tintColor: 'black', marginRight: 20, resizeMode: 'contain' }} source={props.img3} />

      </TouchableOpacity>

    </View>



  );
}
export default Headortop;

