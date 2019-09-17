import { createStackNavigator } from 'react-navigation';
import TrucksRoutes from '../routes/TrucksRoutes';
import navOptions from '../../utils/navOptions';

const TrucksNavigator = createStackNavigator(TrucksRoutes, {
  ...navOptions({
    title: 'Trucks',
    icon: 'truck',
  }),
});

export default TrucksNavigator;
