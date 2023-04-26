import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { set } from 'react-native-reanimated';
import ImagePath from '../assets/ImagePath';
import Globl from '../common/Globl';



const Javademo = ({ navigation }) => {
    const [name, setName] = useState()
    const [age, setage] = useState()
    Globl.user = name
    Globl.age = age



    //number ko star banana
    //     let number = "8094735870";


    //     let last = number.slice(-1)
    // console.log(last);
    //   let res =last.padStart(number.length,"*")
    //   console.log(res)


    //dublicate velue hatana
    // let nams =[1,2,3,2,4,,3]

    // let res =nams.filter((num,i,arr)=>{
    //     return arr.indexOf(num) ===i;
    // })
    // console.log(res);

     

    //undifind velue add krna
    // let nums =[1,2,3];
    // nums[5]=6;
    // console.log(nums);




//star print
// let string = "";
// for (let i = 0; i <= 10; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += \<br/>;
// }
// console.log(string);
  

//sum vism deta nikalna
//  for (let i = 1; i <= 100 ; i++) {
  
//     if (i  % 2 == 0){
//         console.log(i);
//     }
  
//  }

  

//duplicte velue print krvana
// let nams =[1,2,3,2,4,,3,4]
 
// for (let i = 0; i < nams.length; i++) {
//   for (let j = i+1; j < nams.length; j++) {
   
//     if(nams[i]==nams[j]){
//         console.log(nams[i]);
//     }
//   }
    
// }
    return (

        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', }}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}

                    style={{ width: 50, height: 50, marginTop: 10, marginLeft: 10 }}>
                    <Image style={{ height: 40, width: 40 }} source={ImagePath.menuicone} />
                </TouchableOpacity>
                <Image style={{ height: 100, width: 100, borderRadius: 80, marginTop: 20, marginLeft: 70 }} source={require('../assets/image/backgroundTop.png')} />


            </View>

            <View style={{}}>

                <TextInput style={{ marginHorizontal: 20, marginTop: 50, borderColor: 'black', borderWidth: 3, fontSize: 20, paddingLeft: 15, borderRadius: 20 }}
                    value={name}
                    onChangeText={t => setName(t)}
                    placeholder=" NAME" />
            </View>
            <View style={{}}>
                <TextInput style={{ marginHorizontal: 20, marginTop: 30, borderColor: 'black', borderWidth: 3, fontSize: 20, paddingLeft: 15, borderRadius: 20 }}
                    placeholder="Age"
                    onChangeText={t => setage(t)}
                    value={age}
                    keyboardType={'number-pad'}

                />
            </View>

            <TouchableOpacity onPress={() => navigation.openDrawer()}
                style={{ backgroundColor: 'orange', marginHorizontal: 20, height: 48, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>


    );
}

export default Javademo;