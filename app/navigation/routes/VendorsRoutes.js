import screens from '../../constants/screens';
import { Vendors, VendorEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Vendors]: {
    screen: Vendors,
    navigationOptions: headerOptions({ title: 'Vendors' }),
  },
  [screens.VendorEditor]: {
    screen: VendorEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
