import { createStackNavigator } from 'react-navigation';
import FavouritesRoutes from '../routes/FavouritesRoutes';
import navOptions from '../../utils/navOptions';

const FavouritesNavigator = createStackNavigator(FavouritesRoutes, {
  ...navOptions({
    title: 'Favourites',
    icon: 'star',
  }),
});

export default FavouritesNavigator;
