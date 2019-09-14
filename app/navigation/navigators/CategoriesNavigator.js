import { createStackNavigator } from 'react-navigation';
import CategoriesRoutes from '../routes/CategoriesRoutes';
import navOptions from '../../utils/navOptions';

const CategoriesNavigator = createStackNavigator(CategoriesRoutes, {
  ...navOptions({
    title: 'Categories',
    icon: 'inbox',
  }),
});

export default CategoriesNavigator;
