import { createStackNavigator } from 'react-navigation';
import ItemsRoutes from '../routes/ItemsRoutes';
import navOptions from '../../utils/navOptions';

const ItemsNavigator = createStackNavigator(ItemsRoutes, {
  ...navOptions({
    title: 'Items',
    icon: 'item',
  }),
});

export default ItemsNavigator;
