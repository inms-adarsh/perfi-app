import { createStackNavigator } from 'react-navigation';
import DriverSettlementsRoutes from '../routes/DriverSettlementsRoutes';
import navOptions from '../../utils/navOptions';

const DriverSettlementsNavigator = createStackNavigator(DriverSettlementsRoutes, {
  ...navOptions({
    title: 'DriverSettlements',
    icon: 'driversettlement',
  }),
});

export default DriverSettlementsNavigator;
