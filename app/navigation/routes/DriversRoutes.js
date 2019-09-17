import screens from '../../constants/screens';
import { Drivers, DriverEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Drivers]: {
    screen: Drivers,
    navigationOptions: headerOptions({ title: 'Drivers' }),
  },
  [screens.DriverEditor]: {
    screen: DriverEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
