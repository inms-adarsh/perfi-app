import app from './app';
import accounts from './accounts';

import categories from './categories';
import transactions from './transactions';
import transfers from './transfers';
import navigator from './navigator';
import settings from './settings';
// -- IMPORT --
import { firebaseReducer } from 'react-redux-firebase'

import { firestoreReducer } from 'redux-firestore'

const appReducer = {

  app,
  accounts,
  categories,
  transactions,
  transfers,
  settings,
  firebase: firebaseReducer,
  firestore:firestoreReducer,
  // -- LIST --
};


export default appReducer;
