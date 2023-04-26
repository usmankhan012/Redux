import React from 'react';
import { StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import ImagePath from '../assets/ImagePath';

const Hellofood3 = () => {
  return (
    <View style={{ flex: 1, }}>

      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="blue" translucent={false} />
      <View style={{ height: 50, width: '100%', flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
        <Image style={{ height: 25, width: 25, resizeMode: 'contain', left: 10 }} source={ImagePath.back} />
        <Image style={{ height: 25, width: 25, resizeMode: 'contain', right: 15 }} source={ImagePath.gifticone} />

      </View>

      <View style={{ height: 400, width: '100%', }}>
        <Image style={{ resizeMode: 'cover', height: '100%', width: '100%', borderRadius: 10 }} source={ImagePath.lunch} />
      </View>


      <View style={{ height: 30, width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: -25 }}>
        <Text style={{ fontSize: 25, left: 10, color: 'black' }}>Grilled salmon</Text>
        <Text style={{ fontSize: 25, right: 10, color: 'black' }}>$96.00</Text>

      </View>


      <View style={{ flexDirection: 'row', height: 30, width: '100%', marginTop: 5 }}>
        <Text style={{ fontSize: 20, left: 10 }}>by</Text>
        <Text style={{ color: 'black', fontSize: 20, left: 20 }}>pizza hut </Text>
      </View>


      <View style={{ flexDirection: 'row', width: '100%', height: 40, justifyContent: 'space-between', marginTop: 15 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 50, left: 50, top: -15 }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '50%', backgroundColor: 'red', height: 40, borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', top: 7, }}>Add To Bag</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{ fontSize: 30, right: 50 }}>+</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  );
}

export default Hellofood3;
