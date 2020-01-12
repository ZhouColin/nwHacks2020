import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReportScreen from 'features/ReportScreen';
import LoginScreen from 'features/LoginScreen';
import UserScreen from 'features/UserScreen';
import SelfScreen from 'features/SelfScreen';
import LoadingScreen from 'features/LoadingScreen';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const UserStack = createStackNavigator(
  {
    UserPage: UserScreen,
    UserInfo: SelfScreen,
  },
  {
    initialRouteName: 'UserPage',
  },
);

const AppStack = createBottomTabNavigator(
  {
    Report: ReportScreen,
    User: UserStack,
  },
  {
    initialRouteName: 'Report',
  },
);
const AuthStack = createStackNavigator({SignIn: LoginScreen});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
