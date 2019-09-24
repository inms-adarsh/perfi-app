import app from './app';
import accounts from './accounts';

import categories from './categories';
import transactions from './transactions';
import transfers from './transfers';
import navigator from './navigator';
// -- IMPORT --
import driversettlements from "./driversettlements";
import loadexpenses from "./loadexpenses";
import checkcalls from "./checkcalls";
import items from "./items";
import locations from "./locations";
import settings from "./settings";
import loads from "./loads";
import trucks from "./trucks";
import staffs from "./staffs";
import transportations from "./transportations";
import vendors from "./vendors";
import drivers from "./drivers";
import brokers from "./brokers";
import customers from "./customers";
import { firebaseReducer } from 'react-redux-firebase'

import { firestoreReducer } from 'redux-firestore'

const appReducer = {

  app,
  accounts,
  categories,
  transactions,
  transfers,
 // settings,
  firebase: firebaseReducer,
  firestore:firestoreReducer,
  // -- LIST --
	driversettlements,
	loadexpenses,
	checkcalls,
	items,
	locations,
	settings,
	loads,
	trucks,
	staffs,
	transportations,
	vendors,
	drivers,
	brokers,
	customers,
};


export default appReducer;
