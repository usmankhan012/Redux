import React from "react";
import { ActivityIndicator, View, Modal } from "react-native";

const Lodar = (props) => (
  <View style={{ flex: 1, justifyContent: 'center' }}>

    <Modal
      animationType="slide"
      transparent={true}
      visible={props.loderss}

    >
      <View style={{ flex: 1, backgroundColor: 'rgba(28, 26, 27, 0.8)', justifyContent: 'center' }}>
        <ActivityIndicator style={{ alignSelf: 'center', backgroundColor: 'white', padding: 20, borderRadius: 20 }} />
      </View>
    </Modal>
  
  </View>
);
export default Lodar