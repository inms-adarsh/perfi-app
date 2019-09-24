import screens from '../../constants/screens';
import { DriverSettlements, DriverSettlementEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.DriverSettlements]: {
    screen: DriverSettlements,
    navigationOptions: headerOptions({ title: 'DriverSettlements' }),
  },
  [screens.DriverSettlementEditor]: {
    screen: DriverSettlementEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
