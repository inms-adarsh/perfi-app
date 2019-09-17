import screens from '../../constants/screens';
import { Items, ItemEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Items]: {
    screen: Items,
    navigationOptions: headerOptions({ title: 'Items' }),
  },
  [screens.ItemEditor]: {
    screen: ItemEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
