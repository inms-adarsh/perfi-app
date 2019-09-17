import { createStackNavigator } from 'react-navigation';
import BrokersRoutes from '../routes/BrokersRoutes';
import navOptions from '../../utils/navOptions';

const BrokersNavigator = createStackNavigator(BrokersRoutes, {
  ...navOptions({
    title: 'Brokers',
    icon: 'broker',
  }),
});

export default BrokersNavigator;
