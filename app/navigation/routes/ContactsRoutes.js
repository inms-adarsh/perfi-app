import screens from '../../constants/screens';
import { Contacts, ContactEditor, Locations, LocationEditor, Drivers, DriverEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Contacts]: {
    screen: Contacts,
    navigationOptions: headerOptions({ title: 'Contacts' }),
  },
  [screens.ContactEditor]: {
    screen: ContactEditor,
  },
  /*-- SCREENS --*/
	['ContactDriversList']: {
    screen: Drivers,
    navigationOptions: headerOptions({ title: 'Select Driver' }),
  },
  ['ContactDriversListEditor']: {
    screen: DriverEditor
  },
	['ContactLocationsList']: {
    screen: Locations,
    navigationOptions: headerOptions({ title: 'Select Location' }),
  },
  ['ContactLocationsListEditor']: {
    screen: LocationEditor
  },
};

export default Routes;
