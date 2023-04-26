// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hellofoodapi from '../Screen/Hellofoodapi';
import Hellofoodotp from '../Screen/Hellofoodotp';
import Hellofoodlogin from '../Screen/Hellofoodlogin';
import Api from '../Screen/Api';
import Api2 from '../Screen/Api2';
import Hellofood2 from '../Screen/Hellofood2';
import Hellofood3 from '../Screen/Hellofood3';
import Signupapi from '../Screen/Signupapi';
import Otp from '../Screen/Otp';
import Newsignupapi from '../Screen/Newsignupapi';
import Splesh from '../Screen/Splesh';
import Start from '../Screen/Start';
import Getstart from '../Screen/Getstart';
import Edilsignin from '../Screen/Edilsignin';
import Edilforgotpassword from '../Screen/Edilforgotpassword';
import Edilotpverify from '../Screen/Edilotpverify';
import Javademo from '../Screen/Javademo';
import Darwar from '../Screen/Darwar';

const Stack = createNativeStackNavigator();


const Drawer = createDrawerNavigator();

function Mydrawer({route}) {
 
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#c6cbef',
                    width: 300,
                },
            }}
            drawerContent={(props) => <Darwar {...props}  />}>
            <Drawer.Screen name="Javademo" component={Javademo}/>
        </Drawer.Navigator >
    );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Api'>
        <Stack.Screen name="Hellofoodapi" component={Hellofoodapi} options={{ headerShown: false }} />
        <Stack.Screen name="Hellofoodotp" component={Hellofoodotp} options={{ headerShown: false }} />
        <Stack.Screen name="Hellofoodlogin" component={Hellofoodlogin} options={{ headerShown: false }} />
        <Stack.Screen name="Api" component={Api} options={{ headerShown: false }} />
        <Stack.Screen name="Api2" component={Api2} options={{ headerShown: false }} />
        <Stack.Screen name="Hellofood2" component={Hellofood2} options={{ headerShown: false }} />
        <Stack.Screen name="Hellofood3" component={Hellofood3} options={{ headerShown: false }} />
        <Stack.Screen name="Signupapi" component={Signupapi} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="Newsignupapi" component={Newsignupapi}/>
        <Stack.Screen name="Splesh" component={Splesh}/>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Getstart" component={Getstart}/>
        <Stack.Screen name="Edilsignin" component={Edilsignin}/>
        <Stack.Screen name="Edilforgotpassword" component={Edilforgotpassword}/>
        <Stack.Screen name="Edilotpverify" component={Edilotpverify}/>
        <Stack.Screen name="Javademo" component={Mydrawer}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function handleNavigation(nav) {
  switch (nav.type) {
    case 'push':
      nav.navigation.navigate(nav.page, nav.passProps);
      break;
    case 'setRoot':
      nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] })
      break;
    case 'pop':
      nav.navigation.goBack();
      break;
    case 'popToTop':
      nav.navigation.popToTop();
      break;
  }
}

export default Routes;