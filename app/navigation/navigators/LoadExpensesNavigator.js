import { createStackNavigator } from 'react-navigation';
import LoadExpensesRoutes from '../routes/LoadExpensesRoutes';
import navOptions from '../../utils/navOptions';

const LoadExpensesNavigator = createStackNavigator(LoadExpensesRoutes, {
  ...navOptions({
    title: 'LoadExpenses',
    icon: 'loadexpense',
  }),
});

export default LoadExpensesNavigator;
