import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MasonryList from "react-native-masonry-list";

const { width } = Dimensions.get('window');
const Api = ({ navigation }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    apicall();
  }, []);

  const apicall = async () => {
    const response = await fetch(
      'https://pixabay.com/api/?key=31422245-3aaef51dfc81d975659f460fb&q=yellow+flowers&image_type=photo',
    );
    const json = await response.json();
    setdata(json.hits);
    console.log('===', json.hits);
  };
  const onclick = data => {
    props.navigation.navigate('Api2', { user: data.id });
    console.log('====', data);
  };

  // const renderItem = ({ item, index }) => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => navigation.navigate('Api2', { 'ImageData': item })}
  //       style={{

  //       }}>
  //       <Image
  //         style={{

  //           height:  200,
  //           borderRadius: 20,

  //           width: 150,
  //           resizeMode: 'contain',
  //           // marginTop: index % 2 == -2 ? -60 : 30,
  //           marginLeft: 10,
  //           alignSelf: 'stretch'
  //         }}
  //         source={{ uri: item.largeImageURL }}
  //       />
  //     </TouchableOpacity>
  //   );
  // };
  // renderSeparator = (item) => (
  //   <View>
  //     {/* <Image style={{height:100,width:'100%',borderRadius:20,marginVertical:20,marginTop:0}} source={require('../asstes/Image/bank.png')} /> */}

  //   </View>
  // );

  return (
    <View style={{ 
      
      
        
      
       flex: 1,   }}>
      {/* <FlatList
        style={{
            alignSelf:'stretch'
        }}
        contentContainerStyle={{
            paddingHorizontal:20,
            alignSelf:'stretch'
        }}
          data={data}
          renderItem={renderItem}
          numColumns={2}
      
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
        /> */}


      <MasonryList
        data={data}
        renderItem={({ item }) => (
          <View style={{ margin: 5, borderRadius: 5 }}>
            <Image
              source={{ uri: item.largeImageURL }}
              style={{ width: width / 2 - 10, height: 200 }}
              resizeMode="cover"
            />
            {/* <Text style={{ marginTop: 5 }}>{item.title}</Text> */}
          </View>
        )}
        keyExtractor={(item, index) => String(index)}
        numColumns={2}
      />

    </View>
  );
};

export default Api;