import { createStackNavigator } from 'react-navigation';
import StaffsRoutes from '../routes/StaffsRoutes';
import navOptions from '../../utils/navOptions';

const StaffsNavigator = createStackNavigator(StaffsRoutes, {
  ...navOptions({
    title: 'Staffs',
    icon: 'staff',
  }),
});

export default StaffsNavigator;
