import { createStackNavigator } from 'react-navigation';
import CustomersRoutes from '../routes/CustomersRoutes';
import navOptions from '../../utils/navOptions';

const CustomersNavigator = createStackNavigator(CustomersRoutes, {
  ...navOptions({
    title: 'Customers',
    icon: 'customer',
  }),
});

export default CustomersNavigator;
