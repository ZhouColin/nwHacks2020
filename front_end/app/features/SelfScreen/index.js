import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CardTile = ({userName, imageUri, analyses}) => (
  <View
    style={{
      width: deviceWidth,
      height: 180,
      marginBottom: 10,
      alignItems: 'center',
      shadowOffset: {width: 5, height: 5},
      shadowColor: 'black',
      shadowOpacity: 0.3,
    }}>
    <View
      style={{
        width: 350,
        height: 40,
        top: 160,
        borderRadius: 5,
        backgroundColor:
          analyses.score < -0.2
            ? 'rgb(81, 97,171)'
            : analyses.score > 0.2
            ? 'rgb(116, 190,255)'
            : 'rgb(149, 144, 144)',
      }}
    />
    <TouchableOpacity
      style={{
        height: 130,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: 350,
      }}>
      <View style={{flex: 1, alignItems: 'center', paddingTop: 15}}>
        <Image
          style={{
            width: 30,
            height: 30,
            paddingLeft: 10,
            paddingTop: 10,
          }}
          source={{
            uri: imageUri,
          }}
        />
      </View>

      <View style={{flex: 5, paddingTop: 15}}>
        <Text style={{fontWeight: 'bold', fontSize: 17, textAlign: 'left'}}>
          {userName}
          <Text style={{fontSize: 13, fontWeight: 'normal'}} numberOfLines={4}>
            {analyses.tweet}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>

    <Text
      style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        paddingTop: 5,
        paddingLeft: 270,
      }}>
      {analyses.score < -0.2
        ? 'Negative'
        : analyses.score > 0.2
        ? 'Positive'
        : 'Neutral'}
    </Text>
  </View>
);

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getMaxKey = analysisStatistics =>
    Object.keys(analysisStatistics).reduce(
      (accumulator, currentValue) =>
        !accumulator ||
        (currentValue.includes('Percentage') &&
          analysisStatistics[currentValue] > analysisStatistics[accumulator])
          ? currentValue
          : accumulator,
      '',
    );

  render() {
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    const values = [50, 20, 30];
    const userData = this.props.navigation.getParam('userData');
    const highestScoreKey = this.getMaxKey(userData.analysisStatistics);
    const highestCharecteristic = (s => {
      if (typeof s !== 'string') return '';
      const upperCased = s.charAt(0).toUpperCase() + s.slice(1);
      return upperCased.replace('Percentage', '');
    })(highestScoreKey);

    return (
      <SafeAreaView stlye={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            marginTop: 5,
            width: deviceWidth,
            height: 180,
            backgroundColor: 'white',
            alignItems: 'center',
            shadowOffset: {width: 5, height: 5},
            shadowColor: 'black',
            shadowOpacity: 0.3,
          }}>
          <Image
            style={{width: 80, height: 80, borderRadius: 40}}
            source={{
              uri: userData.userData.photoUrl,
            }}
          />
          <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}}>
            {userData.userData.name}
            <Text style={{fontSize: 15, fontWeight: 'normal'}}>
              {'\n'}pH: {highestCharecteristic} |{' '}
              <Image
                style={{width: 15, height: 15}}
                source={require('./whale.png')}
              />{' '}
              {`${userData.analysisStatistics[highestScoreKey]}%`}
              {'\n'}
            </Text>
          </Text>
        </View>

        <ScrollView
          style={{
            marginTop: 5,
            flexDirection: 'column',
            width: deviceWidth,
            backgroundColor: '#f5f5f5',
          }}>
          {userData.analyses.map((analyses, index) => (
            <CardTile
              userName={userData.userData.name}
              imageUri={userData.userData.photoUrl}
              analyses={analyses}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
