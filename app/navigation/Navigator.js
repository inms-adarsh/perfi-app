import { createStackNavigator, createAppContainer } from 'react-navigation';
import screens from '../constants/screens';
import { OnBoarding } from '../screens';
import NavigatorDrawer from './NavigatorDrawer';
import { LoginNavigator } from './navigators';
const routes = {  
  
  [screens.OnBoarding]: {
    screen: OnBoarding,
    headerMode: 'screen',
  },  
  ['AuthenticationScreen']: {
    screen: LoginNavigator,
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
  [screens.DrawerRoot]: {
    screen: NavigatorDrawer,
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
  },
};

export default createAppContainer(createStackNavigator(routes));
