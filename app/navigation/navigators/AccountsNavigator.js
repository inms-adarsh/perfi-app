import { createStackNavigator } from 'react-navigation';
import AccountsRoutes from '../routes/AccountsRoutes';
import navOptions from '../../utils/navOptions';

const AccountsNavigator = createStackNavigator(AccountsRoutes, {
  ...navOptions({
    title: 'Accounts',
    icon: 'wallet',
  }),
});

export default AccountsNavigator;
