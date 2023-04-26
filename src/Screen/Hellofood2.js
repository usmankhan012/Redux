import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import ImagePath from '../assets/ImagePath';
// import Asyenkstorgee from '../common/Asyenkstorgee';

const Hellofood2 = (props) => {
  useEffect(() => {

  }, [])

  const logout = async () => {
    // await Asyenkstorgee.removeItemValue('userdata')
    props.navigation.navigate('Hellofood')
  }
  const [tint, settint] = useState()
  const [tint2, settint2] = useState()
  const tintbtn = () => {
    settint(!tint)
  }
  const tintbtn2 = () => {
    settint2(!tint2)
  }
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'burgar',
      img: ImagePath.burgar
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'sushi',
      img: ImagePath.sushi
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'pizza',
      img: ImagePath.pizza
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'cake',
      img: ImagePath.cake
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'icecream',
      img: ImagePath.icecream
    },

  ];

  const renderItem = ({ item }) => (
    <View style={{ margin: 15, justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ height: 50, width: 50, resizeMode: 'contain' }} source={item.img} />
      <Text style={{ color: 'black', fontSize: 17 }}>{item.title}</Text>


    </View>
  );

  return (
    <ScrollView style={{ flex: 1, }}>

      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="pink" translucent={false} />
      <View style={{ height: 40, width: '100%', flexDirection: 'row', justifyContent: 'space-between', top: 20 }}>
        <Text style={{ color: 'black', left: 15, fontWeight: 'bold' }}>What Would You like to eat?</Text>
        <TouchableOpacity onPress={() => logout()}>
          <Image style={{ height: 25, width: 25, resizeMode: 'contain', right: 15 }} source={ImagePath.notifacitionicone} />
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'center', top: 30 }}>
        <TextInput style={{ padding: 15, width: '95%', borderWidth: 1, paddingLeft: 35, fontSize: 15, borderRadius: 10 }}
          placeholder="What Would You like to buy?"
        />
        <Image style={{ height: 20, width: 20, position: 'absolute', left: 20, top: 20, tintColor: 'red' }} source={ImagePath.serach} />
        <Image style={{ height: 30, width: 30, resizeMode: 'contain', position: 'absolute', right: 20, top: 15, tintColor: 'red' }} source={ImagePath.menuicone} />

      </View>

      <View style={{ marginTop: 40 }}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
        <Text style={{ fontSize: 20, left: 20, color: 'black', fontWeight: 'bold' }}>Poplour Foods</Text>
        <TouchableOpacity>
          <Text style={{ color: 'blue', fontSize: 18, right: 15 }}>See all</Text>
        </TouchableOpacity>

      </View>

      <View style={{ flexDirection: 'row', width: '100%', marginTop: 20 }}>
        <View style={{ width: '50%', flexDirection: 'row' }}>

          <View style={{ width: '90%' }}>
            <Image style={{ height: 150, width: '100%', resizeMode: 'contain', left: 10, top: 10 }} source={ImagePath.fryegg} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, color: 'black', left: 10 }}>Fried Egg</Text>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: 'darkred' }} source={ImagePath.sendarow} />
            </View>


            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ fontSize: 18, color: 'black', left: 10 }}>4.9</Text>
              <Image style={{ height: 60, width: 60, resizeMode: 'contain', position: 'absolute', marginLeft: 40, top: -17 }} source={ImagePath.reting} />
              <Text style={{ left: 77, color: 'black', top: 3 }}>(200)</Text>
              <Text style={{ textAlign: 'right', left: 85, top: 3, color: 'black', fontWeight: 'bold' }}>$15.6</Text>
            </View>


          </View>

          <TouchableOpacity style={{ top: 15, width: '10%', height: 25 }} onPress={() => tintbtn()}>
            <Image style={{ height: 40, width: 40, resizeMode: 'contain', tintColor: tint ? '#fff' : 'red', right: 10 }} source={ImagePath.heartpng} />
          </TouchableOpacity>

        </View>


        <View style={{ width: '50%', flexDirection: 'row' }}>
          <View style={{ width: '90%' }}>
            <Image style={{ height: 150, width: '100%', resizeMode: 'contain' }} source={ImagePath.mixvage} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 18, color: 'black', left: 10 }}>Mixed Vegetable </Text>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: 'darkred' }} source={ImagePath.sendarow} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ fontSize: 18, color: 'black', left: 10 }}>4.9</Text>
              <Image style={{ height: 60, width: 60, resizeMode: 'contain', position: 'absolute', marginLeft: 40, top: -17 }} source={ImagePath.reting} />
              <Text style={{ left: 77, color: 'black', top: 3 }}>(100)</Text>
              <Text style={{ textAlign: 'right', left: 85, top: 3, color: 'black', fontWeight: 'bold' }}>$17.3</Text>
            </View>


          </View>
          <TouchableOpacity style={{ top: 15, width: '10%', height: 25 }} onPress={() => tintbtn2()}>
            <Image style={{ height: 40, width: 40, resizeMode: 'contain', tintColor: tint2 ? '#fff' : 'red', right: 20 ,}} source={ImagePath.heartpng} />
          </TouchableOpacity>

        </View>




      </View>

      <Text style={{ top: 20, left: 10, fontSize: 22, color: 'gray', fontWeight: 'bold' }}>Best Foods</Text>

      <View>
        <Image style={{ marginTop: 25, resizeMode: 'contain', height: 400, width: 500 }} source={ImagePath.lunch} />
      </View>


    </ScrollView>
  );
}

export default Hellofood2;