import { createStackNavigator } from 'react-navigation';
import FinalizeLoadBiltysRoutes from '../routes/FinalizeLoadBiltysRoutes';
import navOptions from '../../utils/navOptions';

const FinalizeLoadBiltysNavigator = createStackNavigator(FinalizeLoadBiltysRoutes, {
  ...navOptions({
    title: 'FinalizeLoadBiltys',
    icon: 'finalizeloadbilty',
  }),
});

export default FinalizeLoadBiltysNavigator;
