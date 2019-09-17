import { createStackNavigator } from 'react-navigation';
import LoadsRoutes from '../routes/LoadsRoutes';
import navOptions from '../../utils/navOptions';

const LoadsNavigator = createStackNavigator(LoadsRoutes, {
  ...navOptions({
    title: 'Loads',
    icon: 'load',
  }),
});

export default LoadsNavigator;
