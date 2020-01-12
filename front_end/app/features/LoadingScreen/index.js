import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {setUser} from 'store/user/actions';

const LoadingScreen = ({user, navigation, updateUser}) => {
  useEffect(() => {
    const bootStrap = async () => {
      try {
        const userNew = JSON.parse(await AsyncStorage.getItem('user')) || user;
        console.log(userNew);
        updateUser(userNew);
        navigation.navigate(userNew ? 'App' : 'Auth');
      } catch (err) {
        throw err;
      }
    };

    bootStrap();
  });
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
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
const mapStateToProps = state => ({user: state.user});
const mapDispatchToProps = dispatch => ({
  updateUser: payload => dispatch(setUser(payload)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
