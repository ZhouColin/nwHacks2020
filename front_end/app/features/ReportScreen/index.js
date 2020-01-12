import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions
} from 'react-native';
import { Button } from 'react-native-elements';
import { PieChart } from 'react-native-svg-charts'

class App extends React.PureComponent {

 constructor(props) {
   super(props);
   this.state = {
     selectedSlice: {
       label: '',
       value: 0
     },
     labelWidth: 0
   }
 }
 render() {
   const { labelWidth, selectedSlice } = this.state;
   const { label, value } = selectedSlice;
   const keys = ['Positive', 'Neutral', 'Negative'];
   const values = [50, 20, 30];
   const colors = ['#91EE9A', '#FAFACC', '#FF4040']
   const data = keys.map((key, index) => {
       return {
         key,
         value: values[index],
         svg: { fill: colors[index] },
         arc: { outerRadius: (80 + values[index]) + '%', padAngle: label === key ? 0.1 : 0 },
         onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })
       }
     })
   const deviceWidth = Dimensions.get('window').width
   const deviceHeight = Dimensions.get('window').height

   return (
     <View style={{ justifyContent: 'space-around', top: 50, flex: 0.8 }}>
       <View style={{position: 'absolute', width: deviceWidth, height: 750, top: -50, backgroundColor: '#A9A9A9'}}/>
       <View style={{position: 'absolute', width: deviceWidth, height: 250, bottom: -175, backgroundColor: '#EDEDED'}}/>
       <PieChart
         style={{ height: 300 }}
         outerRadius={'70%'}
         innerRadius={'60%'}
         data={data}
       />
       <Image
          style={{position: 'absolute', top: 40, width: 50, height: 50}}
          source={require('./whale.png')}
        />
       <Text
         onLayout={({ nativeEvent: { layout: { width } } }) => {
           this.setState({ labelWidth: width });
         }}
         style={{
           position: 'absolute',
           top: 120,
           left: deviceWidth / 2 - labelWidth / 2,
           textAlign: 'center'
         }}>
         {`${label} \n ${value}`}
       </Text>
       <Text style={{
           fontSize: 25,
           fontWeight: 'bold',
           textAlign: 'center'}}>
         Your pH is quite acidic.
         <Text style={{fontSize: 15, fontWeight: 'normal'}}>
            {'\n'}{'\n'} Consider rebalancing your waters.
          </Text>

       </Text>
       <View style={{ justifyContent: 'space-around', flexDirection: 'row'}}>
          <View style={{ width: 90, height: 100, justifyContent: 'space-between' }}>
           <Button
            titleStyle={{fontSize: 30, color: 'black'}}
            title="000"
             buttonStyle={{width: 90, height: 100, backgroundColor: 'white'}}/>
           <View style={{width: 90, height: 10, backgroundColor: '#91EE9A'}} />
          </View>
          <View style={{ width: 90, height: 100, justifyContent: 'space-between' }}>
           <Button
            titleStyle={{fontSize: 30, color: 'black'}}
            title="000"
            buttonStyle={{width: 90, height: 100, backgroundColor: 'white'}}/>
           <View style={{width: 90, height: 10, backgroundColor: '#FAFACC'}} />
          </View>
          <View style={{ width: 90, height: 100, justifyContent: 'space-between' }}>
           <Button
            titleStyle={{fontSize: 30, color: 'black'}}
            title="000"
             buttonStyle={{width: 90, height: 100, backgroundColor: 'white'}}/>
           <View style={{width: 90, height: 10, backgroundColor: '#FF4040'}} />
          </View>
       </View>

     </View>
   )
 }
}

export default App;
