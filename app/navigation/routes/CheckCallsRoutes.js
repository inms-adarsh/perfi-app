import screens from '../../constants/screens';
import { CheckCalls, CheckCallEditor, Trucks, TruckEditor, Locations, LocationEditor,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.CheckCalls]: {
    screen: CheckCalls,
    navigationOptions: headerOptions({ title: 'CheckCalls' }),
  },
  [screens.CheckCallEditor]: {
    screen: CheckCallEditor,
  },
  /*-- SCREENS --*/
	['CheckCallLocationsList']: {
    screen: Locations,
    navigationOptions: headerOptions({ title: 'Select Location' }),
  },
  ['CheckCallLocationsListEditor']: {
    screen: LocationEditor
  },
	['CheckCallTrucksList']: {
    screen: Trucks,
    navigationOptions: headerOptions({ title: 'Select Truck' }),
  },
  ['CheckCallTrucksListEditor']: {
    screen: TruckEditor
  },
};

export default Routes;
