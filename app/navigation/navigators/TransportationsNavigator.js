import { createStackNavigator } from 'react-navigation';
import TransportationsRoutes from '../routes/TransportationsRoutes';
import navOptions from '../../utils/navOptions';

const TransportationsNavigator = createStackNavigator(TransportationsRoutes, {
  ...navOptions({
    title: 'Transportations',
    icon: 'transportation',
  }),
});

export default TransportationsNavigator;
