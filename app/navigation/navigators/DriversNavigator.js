import { createStackNavigator } from 'react-navigation';
import DriversRoutes from '../routes/DriversRoutes';
import navOptions from '../../utils/navOptions';

const DriversNavigator = createStackNavigator(DriversRoutes, {
  ...navOptions({
    title: 'Drivers',
    icon: 'driver',
  }),
});

export default DriversNavigator;
