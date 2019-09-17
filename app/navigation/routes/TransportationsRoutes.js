import screens from '../../constants/screens';
import { Transportations, TransportationEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Transportations]: {
    screen: Transportations,
    navigationOptions: headerOptions({ title: 'Transportations' }),
  },
  [screens.TransportationEditor]: {
    screen: TransportationEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
