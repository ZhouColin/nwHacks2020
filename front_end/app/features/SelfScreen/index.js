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
  TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';

class App extends React.PureComponent {

 constructor(props) {
   super(props);
   this.state = {
   }
 }


 render() {

   const deviceWidth = Dimensions.get('window').width
   const deviceHeight = Dimensions.get('window').height
   const values = [50, 20, 30];

   return (
     <SafeAreaView stlye={{flex:1, flexDirection: 'column'}}>

      <View style={{marginTop:5,width: deviceWidth,
        height: 180,
        backgroundColor: 'white',
        alignItems:'center', shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3,}}>
      <Image
         style={{width: 80, height: 80}}
         source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
      <Text style={{fontSize:20, textAlign:'center', fontWeight:'bold'}}>
      {'\n'}USERNAME
        <Text style={{fontSize:15, fontWeight:'normal'}}>
          {'\n'}pH: Acidic | <Image
             style={{width: 15, height: 15}}
             source={require('./whale.png')}/> 80%{'\n'}{'\n'}
        </Text>
      </Text>
      </View>


      <ScrollView style={{marginTop:5,flexDirection: 'column',width: deviceWidth, backgroundColor: '#f5f5f5'}}>

      <View style={{width: deviceWidth, height: 200,alignItems:'center', top:10,shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3,}}>
        <View style={{width: 350, height: 190, borderRadius:5, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:18}}> You may want to unfollow this user. {'\n'}</Text>
          <View style={{width: 200, height:10, flexDirection:'row', borderRadius:5, bottomPadding:10}}>
          <View style={{width: values[0]*2, height:25,borderRadius:3,backgroundColor: '#76bdff', alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>50%</Text>
          </View>
          <View style={{width: values[1]*2, height:25,borderRadius:3,backgroundColor: 'grey', alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>20%</Text>
          </View>
          <View style={{width: values[2]*2, height:25,borderRadius:3,backgroundColor: '#5063ab', alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontWeight:'bold'}}>30%</Text>
          </View>
          </View>


          <Button titleStyle={{fontWeight:'bold'}} title= 'Unfollow' style={{width: 150, height: 60, top:40}}/>

        </View>
      </View>

      <View style={{width: deviceWidth, height: 200,alignItems:'center', marginTop:20,shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3,}}>
        <View style={{width: 350, height: 190, borderRadius:5, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:18, marginTop:5}}>
          Topic Sentiments {'\n'}{'\n'}
          <Text style={{fontWeight:'bold', fontSize:15,color:'#76bdff'}}>
          Positive {'\n'}
          </Text>
          <Text style={{fontWeight:'normal', fontSize:13}}>
          Presidency, Administration, Massacre, Protestors {'\n'}{'\n'}
          </Text>
          <Text style={{fontWeight:'bold',fontSize:15,color:'#5063ab'}}>
          Negative {'\n'}
          </Text>
          <Text style={{fontWeight:'normal',fontSize:13}}>
          Terrorists, Crossing, Barriers, Speaker of the House, Impeachment Hoax, Fraud, Radical Left, Father, Errors, Protest, Expense {'\n'}
          </Text>
          </Text>


        </View>
      </View>

      <View style={{width: deviceWidth, height: 180, marginBottom:10, alignItems:'center', shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3,}}>
        <View style={{width: 350, height: 40,top:160, borderRadius:5, backgroundColor: '#5063ab'}}/>
         <TouchableOpacity
          style={{ height:130,borderRadius:5, flexDirection: 'row', backgroundColor:'white', width: 350}}>

          <View style={{flex:1, alignItems:'center', paddingTop: 15}}>
            <Image
               style={{width: 30, height: 30, paddingLeft:10, paddingTop: 10}}
               source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
          </View>

          <View style={{flex:5, paddingTop: 15}}>
            <Text style={{fontWeight:'bold', fontSize: 17, textAlign: 'left'}}>Username5902{'\n'}
              <Text style={{fontSize: 13, fontWeight: 'normal'}}>{'\n'}Where have the Radical Left, Do Nothing Democrats gone when they have spent the last 3 days defending the life of Qassem Soleimani, one of the worst...”</Text>
            </Text>
          </View>

         </TouchableOpacity>

         <Text style={{color:'white',fontWeight:'bold', fontSize:13, paddingTop:5, paddingLeft:270}}> Negative </Text>
      </View>

      <View style={{width: deviceWidth, height: 200, alignItems:'center', marginBottom:10, shadowOffset:{width: 5,  height: 5}, shadowColor: 'black', shadowOpacity: 0.3,}}>
        <View style={{width: 350, height: 40,top:160, borderRadius:5, backgroundColor: '#5063ab'}}/>
         <TouchableOpacity
          style={{ height:130,borderRadius:5, flexDirection: 'row', backgroundColor:'white', width: 350}}>

          <View style={{flex:1, alignItems:'center', paddingTop: 15}}>
            <Image
               style={{width: 30, height: 30, paddingLeft:10, paddingTop: 10}}
               source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>
          </View>

          <View style={{flex:5, paddingTop: 15}}>
            <Text style={{fontWeight:'bold', fontSize: 17, textAlign: 'left'}}>Username5902{'\n'}
              <Text style={{fontSize: 13, fontWeight: 'normal'}}>{'\n'}Where have the Radical Left, Do Nothing Democrats gone when they have spent the last 3 days defending the life of Qassem Soleimani, one of the worst...”</Text>
            </Text>
          </View>

         </TouchableOpacity>

         <Text style={{color:'white',fontWeight:'bold', fontSize:13, paddingTop:5, paddingLeft:270}}> Negative </Text>
      </View>

      </ScrollView>

     </SafeAreaView>
   )
 }
}

export default App;
