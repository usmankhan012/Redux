import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Routes from './src/navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/Redux/store/store'



const App = () => {
  return (
    <Provider store = { store }>
    <View style={{ flex: 1, }}>


<Routes/>
    </View>

  </Provider>
  );
}

export default App;