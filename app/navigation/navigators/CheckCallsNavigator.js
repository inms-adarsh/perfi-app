import { createStackNavigator } from 'react-navigation';
import CheckCallsRoutes from '../routes/CheckCallsRoutes';
import navOptions from '../../utils/navOptions';

const CheckCallsNavigator = createStackNavigator(CheckCallsRoutes, {
  ...navOptions({
    title: 'Check Calls',
    icon: 'checkcall',
  }),
});

export default CheckCallsNavigator;
