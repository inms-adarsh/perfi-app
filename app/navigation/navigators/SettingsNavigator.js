import { createStackNavigator } from 'react-navigation';
import { Settings } from '../../screens';
import screens from '../../constants/screens';
import navOptions from '../../utils/navOptions';
import headerOptions from '../../utils/stackHeaderOptions';

const SettingsNavigator = createStackNavigator({
  [screens.Settings]: {
    screen: Settings,
    navigationOptions: headerOptions(),
  },
}, {
  ...navOptions({
    title: 'Settings',
    icon: 'settings',
  }),
});

export default SettingsNavigator;
