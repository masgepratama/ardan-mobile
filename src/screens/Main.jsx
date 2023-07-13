import {View, Text} from 'react-native';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Regsiter from './Regsiter';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import {useSelector} from 'react-redux';
import ResetPassword from './ResetPassword';
import {createDrawerNavigator} from '@react-navigation/drawer';

const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Main = () => {
  const token = useSelector(state => state.auth.token);
  return (
    <NavigationContainer>
      {!token && (
        <AuthStack.Navigator
          screenOptions={{headerShadowVisible: false, headerTitle: ''}}>
          <AuthStack.Screen name="Register" component={Regsiter} />
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
          <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
        </AuthStack.Navigator>
      )}
      {token && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;
