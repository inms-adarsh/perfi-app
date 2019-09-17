import { createStackNavigator } from 'react-navigation';
import VendorsRoutes from '../routes/VendorsRoutes';
import navOptions from '../../utils/navOptions';

const VendorsNavigator = createStackNavigator(VendorsRoutes, {
  ...navOptions({
    title: 'Vendors',
    icon: 'vendor',
  }),
});

export default VendorsNavigator;
