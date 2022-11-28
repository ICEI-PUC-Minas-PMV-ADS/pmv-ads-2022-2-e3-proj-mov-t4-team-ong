import { color } from '@rneui/base';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native-paper';


const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#363636'

  },
});

export default Container;