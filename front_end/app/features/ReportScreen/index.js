import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Button} from 'react-native-elements';
import {PieChart} from 'react-native-svg-charts';
import {connect} from 'react-redux';
import {setUser} from 'store/user/actions';
import NumberTicker from 'react-native-number-ticker';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0,
      },
      labelWidth: 0,
    };
  }

  logOut = async () => {
    try {
      const {updateUser, navigation} = this.props;
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('users');

      updateUser(null);
      navigation.navigate('Auth');
    } catch (err) {
      throw err;
    }
  };
  render() {
    const {labelWidth, selectedSlice} = this.state;
    const {label, value} = selectedSlice;
    const keys = ['Positive', 'Neutral', 'Negative'];
    const values = [50, 20, 30];
    const colors = ['#91EE9A', '#FAFACC', '#FF4040'];
    const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: {fill: colors[index]},
        arc: {
          outerRadius: 80 + values[index] + '%',
          padAngle: label === key ? 0.1 : 0,
        },
        onPress: () =>
          this.setState({selectedSlice: {label: key, value: values[index]}}),
      };
    });

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    return (
      <View style={{justifyContent: 'space-around', top: 50, flex: 0.9}}>
        <View
          style={{
            position: 'absolute',
            width: deviceWidth,
            height: 600,
            top: -50,
            backgroundColor: '#b5dcfd',
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: deviceWidth,
            height: 360,
            bottom: -175,
            backgroundColor: '#c9c9c9',
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: deviceWidth / 2 - 100,
            top: 70,
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: '#74bad1',
          }}
        />
        <PieChart
          style={{height: 300,shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3}}
          outerRadius={'70%'}
          innerRadius={'60%'}
          data={data}
          animate={true}
          animationDuration={300}
        />
        <Image
          style={{
            position: 'absolute',
            marginTop:100,
            left: deviceWidth / 2 - 50,
            width: 100,
            height: 180,
          }}
          source={require('./commas.png')}
        />
        <Text
          onLayout={({
            nativeEvent: {
              layout: {width},
            },
          }) => {
            this.setState({labelWidth: width});
          }}
          style={{
            position: 'absolute',
            top: 195,
            fontSize: 25,
            fontWeight: 'bold',
            left: deviceWidth / 2 - labelWidth / 2,
            textAlign: 'center',
            color: '#5063AB',
          }}>
          Acidic
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Your pH is quite acidic.
          <Text style={{fontSize: 15, fontWeight: 'normal'}}>
            {'\n'}
            {'\n'} Consider rebalancing your waters.{'\n'}
          </Text>
        </Text>
        <View style={{justifyContent: 'space-around', flexDirection: 'row',}}>
          <View
            style={{width: 90, height: 150, justifyContent: 'space-between', shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3}}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
                width: 100,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 30, height: 30, marginBottom:10}}
                source={require('./fish.png')}
              />
              <NumberTicker
                 number={40}
                 textSize={40}
                 duration={3000}
                 textStyle={{fontWeight: 'bold', color: 'black'}}
              />
              <Text
              style={{fontSize: 15}}>{'\n'}Positive</Text>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: '#7B7B7B'}}>
                  users
                </Text>
            </TouchableOpacity>
            <View
              style={{width: 100, height: 15, backgroundColor: '#91EE9A'}}
            />
          </View>

          <View
            style={{width: 90, height: 150, justifyContent: 'space-between', shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3}}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
                width: 100,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 30, height: 30, marginBottom:10}}
                source={require('./fish.png')}
              />
              <NumberTicker
                 number={40}
                 textSize={40}
                 duration={3000}
                 textStyle={{fontWeight: 'bold', color: 'black'}}
              />
              <Text
              style={{fontSize: 15}}>{'\n'}Neutral</Text>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: '#7B7B7B'}}>
                  users
                </Text>
            </TouchableOpacity>
            <View
              style={{width: 100, height: 15, backgroundColor: '#FAFACC'}}
            />
          </View>

          <View
            style={{width: 90, height: 150, justifyContent: 'space-between', shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3}}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
                width: 100,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 30, height: 30, marginBottom:10}}
                source={require('./fish.png')}
              />
              <NumberTicker
                 number={40}
                 textSize={40}
                 duration={3000}
                 textStyle={{fontWeight: 'bold', color: 'black'}}
              />
              <Text
              style={{fontSize: 15}}>{'\n'}Negative</Text>
                <Text
                  style={{fontSize: 10, fontWeight: 'bold', color: '#7B7B7B'}}>
                  users
                </Text>
            </TouchableOpacity>
            <View
              style={{width: 100, height: 15, backgroundColor: '#FF4040'}}
            />
          </View>
        </View>
        <Button title="log out" onPress={this.logOut} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: payload => dispatch(setUser(payload)),
});

// eslint-disable-next-line prettier/prettier
export default connect(null, mapDispatchToProps)(App);
