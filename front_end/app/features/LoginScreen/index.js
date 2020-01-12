import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';

const LoginScreen = () => (
  <SafeAreaView style={styles.pageContainer}>
    <Button title="log in with twitter" />
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
