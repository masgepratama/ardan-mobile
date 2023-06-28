import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '../assets/globalStyles';
import Input from '../components/Input';
import Button from '../components/Button';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Regsiter = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.heading}>
        <View>
          <Text style={globalStyles.title}>Sign Up</Text>
        </View>
        <View>
          <Text style={globalStyles.subTitle}>
            Already have an account?
            <Link style={globalStyles.link} to="/Login">
              Log In
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.formGap}>
        <Input placeholder="Full Name" />
        <Input placeholder="Enter your email" keyboardType="email-address" />
        <Input placeholder="Enter your password" secureTextEntry />
        <Input placeholder="Confirm your password" secureTextEntry />
        <View style={styles.formCheck}>
          <Icon name="square" size={20} color="grey" />
          <Text>Accept terms and condition</Text>
        </View>
      </View>
      <View>
        <Button>Sign Up</Button>
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
  heading: {
    gap: 15,
  },
  formCheck: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 15,
  },
  formGap: {
    gap: 15,
  },
});

export default Regsiter;
