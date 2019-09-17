import screens from '../../constants/screens';
import { Customers, CustomerEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Customers]: {
    screen: Customers,
    navigationOptions: headerOptions({ title: 'Customers' }),
  },
  [screens.CustomerEditor]: {
    screen: CustomerEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
