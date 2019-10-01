import screens from '../../constants/screens';
import { LoadPayments, LoadPaymentEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.LoadPayments]: {
    screen: LoadPayments,
    navigationOptions: headerOptions({ title: 'LoadPayments' }),
  },
  [screens.LoadPaymentEditor]: {
    screen: LoadPaymentEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
