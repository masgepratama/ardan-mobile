import {View, Text} from 'react-native';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Regsiter from './Regsiter';
import Login from './Login';
import ForgotPassword from './ForgotPassword';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{headerShadowVisible: false, headerTitle: ''}}>
        <AuthStack.Screen name="Register" component={Regsiter} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </AuthStack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Main;