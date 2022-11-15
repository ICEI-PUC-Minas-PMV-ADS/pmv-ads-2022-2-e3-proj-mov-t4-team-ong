import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return (
    <TextInput 
    style={styles.input}
    keyboardType='decimal-pad'
    {...props}
  
  />);
};

const styles = StyleSheet.create({
  input: {
    
    marginBottom: 10,
  },
});

export default Input;