import React, {useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  NativeModules,
  AsyncStorage,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import {Button} from 'react-native-elements';
import {setUser} from 'store/user/actions';
import {connect} from 'react-redux';
import {filterNewUsers} from 'store/users/actions';
import LinearGradient from 'react-native-linear-gradient';

const {RNTwitterSignIn} = NativeModules;

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

const Constants = {
  TWITTER_COMSUMER_KEY: 'gNDVLWSOW7qBMaZ6VTEPUXf9x',
  TWITTER_CONSUMER_SECRET: 'N8J2L1XaeNiFWNfeVrAAnkAFyDjxbiYBpCeFXP42qIWKkiMGQm',
};

const LoginScreen = ({navigation, updateUser, filterAllNewUsers}) => {
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
      await fetchUsers(authToken, authTokenSecret);

      await AsyncStorage.setItem('user', JSON.stringify(user));

      updateUser(user);
      user && navigation.navigate('App');
    } catch (err) {
      throw err;
    }
  };

  const fetchUsers = async (authToken, authTokenSecret) => {
    try {
      const response = await fetch(
        'https://team-x-nwhacks.appspot.com/analysis',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: authToken,
            tokenSecret: authTokenSecret,
          }),
        },
      );

      const parsedData = await response.json();

      console.log('setData', parsedData.analyses);
      await AsyncStorage.setItem('users', JSON.stringify(parsedData.analyses));

      filterAllNewUsers({
        allUsers: parsedData.analyses,
        filterBy: 'Neutral',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.pageContainer}>


      <LinearGradient colors={['#5d78b3', '#3b5998', '#1661c9']} style={styles.linearGradient}>

        <View style={{width:deviceWidth, height: deviceHeight, backgroundColor:'transparent', alignItems:'center'}}>
        <Image
          style={{
            position: 'absolute',
            marginTop:200,
            width: 110,
            height: 110,
          }}
          source={require('./logo.png')}
        />
        <Text style={{color:'#e0e0e0', fontSize:30, marginTop:340, fontWeight:'bold'}}> pHeed </Text>

        <TouchableOpacity
          style={{width: 200, height: 50, borderColor:'white', marginTop: 170, borderRadius:10, borderWidth:0.5, alignItems:'center', justifyContent:'center'}}
          onPress={onSignIn}>
        <Text style={{color:'white', fontSize:20}}> Log in to Twitter </Text>
        </TouchableOpacity>

        <View style={{width:deviceWidth, height: 15, backgroundColor:'#efefef', marginTop:140}}/>
        <View style={{width:deviceWidth, height: 15, backgroundColor:'#b5dbfd'}}/>

        </View>
      </LinearGradient>



    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
  flex: 1,
  paddingLeft: 15,
  paddingRight: 15,
  borderRadius: 5
},
});

const mapDispatchToProps = dispatch => ({
  updateUser: payload => dispatch(setUser(payload)),
  filterAllNewUsers: payload => {
    dispatch(filterNewUsers(payload));
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(LoginScreen);
