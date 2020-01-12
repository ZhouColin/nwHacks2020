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
  TouchableOpacity
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
       <View style={{position: 'absolute', width: deviceWidth, height: 750, top: -50, backgroundColor: '#72BAD1'}}/>
       <View style={{position: 'absolute', width: deviceWidth, height: 240, bottom: -175, backgroundColor: '#EDEDED'}}/>
       <View style={{position: 'absolute', left: deviceWidth/2 - 100, top: 70, width: 200, height: 200, borderRadius: 100, backgroundColor: 'white'}}/>
           <PieChart
             style={{ height: 300 }}
             outerRadius={'70%'}
             innerRadius={'60%'}
             data={data}/>
           <Image
              style={{position: 'absolute', top: 105, left: deviceWidth/2 -40, width: 80, height: 80}}
              source={require('./whale.png')}/>
           <Text
             onLayout={({ nativeEvent: { layout: { width } } }) => {
               this.setState({ labelWidth: width });
             }}
             style={{
               position: 'absolute',
               top: 195,
               fontSize: 25,
               fontWeight: 'bold',
               left: deviceWidth / 2 - labelWidth / 2,
               textAlign: 'center',
               color: '#5063AB'
             }}>
             Acidic
           </Text>
           <Text style={{
               fontSize: 25,
               fontWeight: 'bold',
               textAlign: 'center'}}>
             Your pH is quite acidic.
             <Text style={{fontSize: 15, fontWeight: 'normal'}}>
                {'\n'}{'\n'} Consider rebalancing your waters.{'\n'}
              </Text>
           </Text>
           <View style={{ justifyContent: 'space-around', flexDirection: 'row'}}>

              <View style={{ width: 90, height: 150, justifyContent: 'space-between' }}>
                 <TouchableOpacity
                  style={{flex:1, flexDirection: 'column', backgroundColor:'white', width: 100, height: 150, alignItems: 'center', justifyContent:'center'}}>
                  <Image
                     style={{width: 30, height: 30}}
                     source={require('./fish.png')}
                   />
                   <Text style={{fontWeight:'bold', fontSize: 30, textAlign: 'center'}}>000
                     <Text style={{fontSize: 15}}>{'\n'}Positive</Text>
                     <Text style={{fontSize: 10, fontWeight: 'bold', color:'#7B7B7B'}}>{'\n'}users</Text>
                   </Text>
                 </TouchableOpacity>
               <View style={{width: 100, height: 15, backgroundColor: '#91EE9A'}}/>
              </View>

              <View style={{ width: 90, height: 150, justifyContent: 'space-between' }}>
                 <TouchableOpacity
                  style={{flex:1, flexDirection: 'column', backgroundColor:'white', width: 100, height: 150, alignItems: 'center', justifyContent:'center'}}>
                  <Image
                     style={{width: 30, height: 30}}
                     source={require('./fish.png')}
                   />
                   <Text style={{fontWeight:'bold', fontSize: 30, textAlign: 'center'}}>000
                     <Text style={{fontSize: 15}}>{'\n'}Neutral</Text>
                     <Text style={{fontSize: 10, fontWeight: 'bold', color:'#7B7B7B'}}>{'\n'}users</Text>
                   </Text>
                 </TouchableOpacity>
               <View style={{width: 100, height: 15, backgroundColor: '#FAFACC'}}/>
              </View>

              <View style={{ width: 90, height: 150, justifyContent: 'space-between' }}>
                 <TouchableOpacity
                  style={{flex:1, flexDirection: 'column', backgroundColor:'white', width: 100, height: 150, alignItems: 'center', justifyContent:'center'}}>
                  <Image
                     style={{width: 30, height: 30}}
                     source={require('./fish.png')}
                   />
                   <Text style={{fontWeight:'bold', fontSize: 30, textAlign: 'center'}}>000
                     <Text style={{fontSize: 15}}>{'\n'}Negative</Text>
                     <Text style={{fontSize: 10, fontWeight: 'bold', color:'#7B7B7B'}}>{'\n'}users</Text>
                   </Text>
                 </TouchableOpacity>
               <View style={{width: 100, height: 15, backgroundColor: '#FF4040'}}/>
              </View>

       </View>

     </View>
   )
 }
}

export default App;
