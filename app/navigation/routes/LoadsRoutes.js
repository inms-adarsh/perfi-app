import screens from '../../constants/screens';
import { Loads, LoadEditor, Customers, CustomerEditor, Brokers, BrokerEditor, Transportations, TransportationEditor, Trucks, TruckEditor, Locations, LocationEditor, ItemEditor, Drivers, DriverEditor, /*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';

const Routes = {
  [screens.Loads]: {
    screen: Loads,
    navigationOptions: headerOptions({ title: 'Loads' }),
  },
  [screens.LoadEditor]: {
    screen: LoadEditor,
  },
  /*-- SCREENS --*/
	['LoadDriversList']: {
    screen: Drivers,
    navigationOptions: headerOptions({ title: 'Select Driver' }),
  },
  ['LoadDriversListEditor']: {
    screen: DriverEditor
  },
  ['LoadLocationsList']: {
    screen: Locations,
    navigationOptions: headerOptions({ title: 'Select Location' }),
  },
  ['LoadLocationsListEditor']: {
    screen: LocationEditor
  },
  ['LoadTrucksList']: {
    screen: Trucks,
    navigationOptions: headerOptions({ title: 'Select Truck' }),
  },
  ['LoadTrucksListEditor']: {
    screen: TruckEditor
  },
  ['LoadTransportationsList']: {
    screen: Transportations,
    navigationOptions: headerOptions({ title: 'Select Transportation' }),
  },
  ['LoadTransportationsListEditor']: {
    screen: TransportationEditor
  },
  ['LoadCustomersList']: {
    screen: Customers,
    navigationOptions: headerOptions({ title: 'Select Customer' }),
  },
  ['LoadCustomersListEditor']: {
    screen: CustomerEditor
  },
  ['LoadBrokersList']: {
    screen: Brokers,
    navigationOptions: headerOptions({ title: 'Select Broker' }),
  },
  ['LoadBrokersListEditor']: {
    screen: BrokerEditor
  },
  ['LoadItemAdd']: {
    screen: ItemEditor
  },
};

export default Routes;
