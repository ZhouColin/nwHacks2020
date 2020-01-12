import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ReportScreen from 'features/ReportScreen';
import LoginScreen from 'features/LoginScreen';
import UserScreen from 'features/UserScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';



// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({Home: ReportScreen});
const AuthStack = createStackNavigator({SignIn: LoginScreen});
const UserStack = createStackNavigator({Users: UserScreen});

export default createAppContainer(
  createBottomTabNavigator(
    {
      Report: AppStack,
      my_pH: AuthStack,
      Users: UserStack
    },
    {
      initialRouteName: 'Report',
    },
  ),
);
