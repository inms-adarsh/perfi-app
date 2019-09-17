import { createStackNavigator } from 'react-navigation';
import LocationsRoutes from '../routes/LocationsRoutes';
import navOptions from '../../utils/navOptions';

const LocationsNavigator = createStackNavigator(LocationsRoutes, {
  ...navOptions({
    title: 'Locations',
    icon: 'location',
  }),
});

export default LocationsNavigator;
