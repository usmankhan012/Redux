import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import { TabBarItem } from 'react-native-tab-view';

const Api2 = ({navigation, route}) => {
  const ImageData = route.params?.ImageData;
  console.log('ImageData====>', ImageData);

  return (
    <View style={{flex: 1}}>
      <Image
        style={{height: 400, width: 359,alignSelf:'center',marginTop:20,borderRadius:20}}
        source={{uri: ImageData.largeImageURL}}
      />
      <View style={{flexDirection:'row'}}>
        <View style={{backgroundColor:'gray',height:30,width:50,borderRadius:10}}>
      <Text style={{textAlign:'center',top:2}}>{ImageData.likes}</Text>
      </View>
      <Text>{ImageData.downloads}</Text>
      </View>
      <Text>{ImageData.tags}</Text>
     
      <Text>{ImageData.user}</Text>
      <Text>{ImageData.comments}</Text>
     


    </View>
  );
};

export default Api2;