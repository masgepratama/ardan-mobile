import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Alert = ({variant, children}) => {
  if (variant === 'error') {
    return (
      <View style={style.errorWrapper}>
        <Text style={style.errorText}>{children}</Text>
      </View>
    );
  } else if (variant === 'success') {
    return (
      <View style={style.wrapperSuccess}>
        <Text style={style.textSuccess}>{children}</Text>
      </View>
    );
  } else {
    return (
      <View style={style.wrapper}>
        <Text style={style.text}>{children}</Text>
      </View>
    );
  }
};

const style = StyleSheet.create({
  errorWrapper: {
    backgroundColor: '#ff9191',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ff3636',
    padding: 10,
  },
  errorText: {
    color: '#ff3636',
  },
  wrapper: {
    backgroundColor: '#bfbfbf',
    borderWidth: 1,
    borderColor: '#545454',
    padding: 5,
  },
  text: {
    color: '#545454',
  },
  wrapperSuccess: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'green',
    padding: 5,
  },
  textSuccess: {
    color: 'white',
  },
});

export default Alert;
