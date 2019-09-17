import screens from '../../constants/screens';
import { Staffs, StaffEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Staffs]: {
    screen: Staffs,
    navigationOptions: headerOptions({ title: 'Staffs' }),
  },
  [screens.StaffEditor]: {
    screen: StaffEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
