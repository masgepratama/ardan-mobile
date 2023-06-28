import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../assets/globalStyles';
import Input from '../components/Input';
import Button from '../components/Button';
import {Link} from '@react-navigation/native';

const Login = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.heading}>
        <View>
          <Text style={globalStyles.title}>Log In</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            Hi, Welcome back to OnceTicket!
          </Text>
        </View>
      </View>
      <View style={styles.formGap}>
        <Input placeholder="Enter your email" keyboardType="email-address" />
        <Input placeholder="Enter your password" secureTextEntry />
        <View style={styles.alignRight}>
          <Link style={globalStyles.link} to="/ForgotPassword">
            Forgot Password
          </Link>
        </View>
      </View>
      <View>
        <Button>Log In</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 50,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  heading: {
    gap: 10,
  },
  formGap: {
    gap: 15,
  },
});

export default Login;
