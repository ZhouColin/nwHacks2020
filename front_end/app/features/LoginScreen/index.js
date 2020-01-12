import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  NativeModules,
  AsyncStorage,
} from 'react-native';
import {Button} from 'react-native-elements';
import {setUser} from 'store/user/actions';
import {connect} from 'react-redux';
const {RNTwitterSignIn} = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: 'gNDVLWSOW7qBMaZ6VTEPUXf9x',
  TWITTER_CONSUMER_SECRET: 'N8J2L1XaeNiFWNfeVrAAnkAFyDjxbiYBpCeFXP42qIWKkiMGQm',
};

const LoginScreen = ({navigation, updateUser}) => {
  const onSignIn = async () => {
    try {
      RNTwitterSignIn.init(
        Constants.TWITTER_COMSUMER_KEY,
        Constants.TWITTER_CONSUMER_SECRET,
      );
      const {
        authToken,
        authTokenSecret,
        name,
        userID,
        userName,
      } = await RNTwitterSignIn.logIn();

      const user = {authToken, authTokenSecret, name, userID, userName};

      await AsyncStorage.setItem('user', JSON.stringify(user));

      updateUser(user);
      user && navigation.navigate('App');
    } catch (err) {
      throw err;
    }
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

const mapDispatchToProps = dispatch => ({
  updateUser: payload => dispatch(setUser(payload)),
});

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(LoginScreen);
