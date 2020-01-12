import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Input} from 'react-native-elements';

const LoginScreen = () => (
  <SafeAreaView style={styles.pageContainer}>
    <Input placeholder="BASIC INPUT" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
