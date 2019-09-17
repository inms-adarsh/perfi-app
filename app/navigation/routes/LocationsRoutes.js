import screens from '../../constants/screens';
import { Locations, LocationEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Locations]: {
    screen: Locations,
    navigationOptions: headerOptions({ title: 'Locations' }),
  },
  [screens.LocationEditor]: {
    screen: LocationEditor,
  },
  /*-- SCREENS --*/
};

export default Routes;
