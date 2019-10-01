import screens from '../../constants/screens';
import { FinalizeLoadBiltys, FinalizeLoadBiltyEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.FinalizeLoadBiltys]: {
    screen: FinalizeLoadBiltys,
    navigationOptions: headerOptions({ title: 'FinalizeLoadBiltys' }),
  },
  [screens.FinalizeLoadBiltyEditor]: {
    screen: FinalizeLoadBiltyEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
