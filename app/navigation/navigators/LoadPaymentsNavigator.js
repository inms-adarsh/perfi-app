import { createStackNavigator } from 'react-navigation';
import LoadPaymentsRoutes from '../routes/LoadPaymentsRoutes';
import navOptions from '../../utils/navOptions';

const LoadPaymentsNavigator = createStackNavigator(LoadPaymentsRoutes, {
  ...navOptions({
    title: 'LoadPayments',
    icon: 'loadpayment',
  }),
});

export default LoadPaymentsNavigator;
