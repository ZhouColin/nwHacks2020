import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, NativeModules} from 'react-native';
import {Button} from 'react-native-elements';

const {RNTwitterSignIn} = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: 'gNDVLWSOW7qBMaZ6VTEPUXf9x',
  TWITTER_CONSUMER_SECRET: 'N8J2L1XaeNiFWNfeVrAAnkAFyDjxbiYBpCeFXP42qIWKkiMGQm',
};

const LoginScreen = () => {
  const onSignIn = () => {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );
    RNTwitterSignIn.logIn()
      .then(loginData => {
        console.log(loginData);
        const {authToken, authTokenSecret} = loginData;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <Button title="log in with twitter" onPress={onSignIn} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
