import screens from '../../constants/screens';
import { LoadExpenses, LoadExpenseEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.LoadExpenses]: {
    screen: LoadExpenses,
    navigationOptions: headerOptions({ title: 'Expenses' }),
  },
  [screens.LoadExpenseEditor]: {
    screen: LoadExpenseEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
