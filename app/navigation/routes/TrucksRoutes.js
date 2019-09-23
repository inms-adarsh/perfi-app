import screens from '../../constants/screens';
import { Trucks, TruckEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Trucks]: {
    screen: Trucks,
    navigationOptions: headerOptions({ title: 'Trucks' }),
  },
  [screens.TruckEditor]: {
    screen: TruckEditor,
  },
  /*-- SCREENS --*/

};

export default Routes;
