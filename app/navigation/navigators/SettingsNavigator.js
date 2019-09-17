import { createStackNavigator } from 'react-navigation';
import SettingsRoutes from '../routes/SettingsRoutes';
import navOptions from '../../utils/navOptions';

const SettingsNavigator = createStackNavigator(SettingsRoutes, {
  ...navOptions({
    title: 'Settings',
    icon: 'setting',
  }),
});

export default SettingsNavigator;
