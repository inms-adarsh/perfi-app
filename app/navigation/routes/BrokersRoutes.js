import screens from '../../constants/screens';
import { Brokers, BrokerEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Brokers]: {
    screen: Brokers,
    navigationOptions: headerOptions({ title: 'Brokers' }),
  },
  [screens.BrokerEditor]: {
    screen: BrokerEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
