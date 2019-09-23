import { createBottomTabNavigator } from 'react-navigation';
import LoadDetailsRoutes from '../routes/LoadDetailsRoutes';
import navOptions from '../../utils/navOptions';

const LoadDetailsNavigator = createBottomTabNavigator(LoadDetailsRoutes);

export default LoadDetailsNavigator;
