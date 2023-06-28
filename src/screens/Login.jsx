import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../assets/globalStyles';
import Input from '../components/Input';
import Button from '../components/Button';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux/es/exports';
import {login} from '../redux/reducers/auth';

const Login = () => {
  const dispatch = useDispatch();
  const doLogin = () => {
    dispatch(login('abc'));
  };
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
        <Button onPress={doLogin}>Log In</Button>
      </View>
      <View style={styles.formAlternative}>
        <Text>or sign in with</Text>
        <View style={styles.formAlternativeIcons}>
          <View style={styles.borderAlternativeIcons}>
            <Icon size={35} name="google" color="grey" />
          </View>
          <View style={styles.borderAlternativeIcons}>
            <Icon size={35} name="facebook" color="blue" />
          </View>
          <View style={styles.borderAlternativeIcons}>
            <Icon size={35} name="fingerprint" color="orange" />
          </View>
        </View>
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
  formAlternative: {
    alignItems: 'center',
    gap: 15,
  },
  formAlternativeIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  borderAlternativeIcons: {
    width: 95,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E14D2A',
    borderRadius: 5,
  },
});

export default Login;
