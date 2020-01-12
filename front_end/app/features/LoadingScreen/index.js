import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

const LoadingScreen = ({user, navigation}) => {
  useEffect(() => {
    navigation.navigate(user ? 'App' : 'Auth');
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

export default connect(mapStateToProps)(LoadingScreen);
