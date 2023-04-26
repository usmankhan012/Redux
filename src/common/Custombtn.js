import React from 'react';
import { TouchableOpacity ,Text} from 'react-native';

export default function Custombtn(props){
  return (


        <TouchableOpacity style={{height:props.hight,width:props.with,backgroundColor:props.bgclr,padding:10,width:'60%',marginLeft:40,marginTop:10}}>
            
            <Text style={{fontSize:props.React,color:'white',textAlign:'center'}}>{props.text}</Text>

        </TouchableOpacity>

  
   
  );
}

 