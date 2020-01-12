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
          <View
            style={{
              width: deviceWidth,
              height: 200,
              alignItems: 'center',
              top: 10,
              shadowOffset: {width: 5, height: 5},
              shadowColor: 'black',
              shadowOpacity: 0.3,
            }}>
            <View
              style={{
                width: 350,
                height: 190,
                borderRadius: 5,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {highestScoreKey === 'negativePercentage' && (
                <Text style={{fontWeight: 'bold', fontSize: 18}}>
                  {' '}
                  You may want to unfollow this user. {'\n'}
                </Text>
              )}
              <View
                style={{
                  width: 200,
                  height: 10,
                  flexDirection: 'row',
                  borderRadius: 5,
                  bottomPadding: 10,
                }}>
                <View
                  style={{
                    width: userData.analysisStatistics.negativePercentage * 2,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: 'rgb(81, 97, 171)',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                    }}>{`${userData.analysisStatistics.negativePercentage}%`}</Text>
                </View>
                <View
                  style={{
                    width: userData.analysisStatistics.neutralPercentage * 2,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: 'rgb(149, 144, 144)',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                    }}>{`${userData.analysisStatistics.neutralPercentage}%`}</Text>
                </View>
                <View
                  style={{
                    width: userData.analysisStatistics.positivePercentage * 2,
                    height: 25,
                    borderRadius: 3,
                    backgroundColor: 'rgb(116, 190, 255)',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                    }}>{`${userData.analysisStatistics.positivePercentage}%`}</Text>
                </View>
              </View>

              <Button
                titleStyle={{fontWeight: 'bold'}}
                title={
                  highestScoreKey === 'negativePercentage'
                    ? 'Unfollow'
                    : 'Go to Twitter'
                }
                style={{width: 150, height: 60, top: 40}}
              />
            </View>
          </View>

          <View
            style={{
              width: deviceWidth,
              height: 200,
              alignItems: 'center',
              marginTop: 20,
              shadowOffset: {width: 5, height: 5},
              shadowColor: 'black',
              shadowOpacity: 0.3,
            }}>
            <View
              style={{
                width: 350,
                height: 190,
                borderRadius: 5,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 5}}>
                Topic Sentiments {'\n'}
                {'\n'}
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#76bdff'}}>
                  Positive {'\n'}
                </Text>
                <Text style={{fontWeight: 'normal', fontSize: 13}}>
                  {userData.positiveEntities.join(',')}
                  {'\n'}
                </Text>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: '#5063ab'}}>
                  Negative {'\n'}
                </Text>
                <Text style={{fontWeight: 'normal', fontSize: 13}}>
                  {userData.negativeEntities.join(',')}
                </Text>
              </Text>
            </View>
          </View>

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
                backgroundColor: '#5063ab',
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
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                />
              </View>

              <View style={{flex: 5, paddingTop: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 17, textAlign: 'left'}}>
                  Username5902{'\n'}
                  <Text style={{fontSize: 13, fontWeight: 'normal'}}>
                    {'\n'}Where have the Radical Left, Do Nothing Democrats gone
                    when they have spent the last 3 days defending the life of
                    Qassem Soleimani, one of the worst...”
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
              {' '}
              Negative{' '}
            </Text>
          </View>

          <View
            style={{
              width: deviceWidth,
              height: 200,
              alignItems: 'center',
              marginBottom: 10,
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
                backgroundColor: '#5063ab',
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
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  }}
                />
              </View>

              <View style={{flex: 5, paddingTop: 15}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 17, textAlign: 'left'}}>
                  Username5902{'\n'}
                  <Text style={{fontSize: 13, fontWeight: 'normal'}}>
                    {'\n'}Where have the Radical Left, Do Nothing Democrats gone
                    when they have spent the last 3 days defending the life of
                    Qassem Soleimani, one of the worst...”
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
              {' '}
              Negative{' '}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default App;
