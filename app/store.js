import { persistStore, persistReducer } from 'redux-persist';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import reducer from './modules';
import AsyncStorage from 'redux-persist/es/storage';
import firebaseConfig from './config/firebaseConfig';

import { reduxFirestore, createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase'

import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable
import 'firebase/auth'

firebase.initializeApp(firebaseConfig);

firebase.auth();
firebase.firestore() // <- needed if using firestore
firebase.functions();
const config = {
  key: 'root',
  whitelist: [
    //'settings',
    'accounts',
    'categories',
    'transactions',
    'transfers',
    // -- LIST --
		'driversettlements',
		'loadexpenses',
		'checkcalls',
		'items',
		'locations',
		'settings',
    'loads',
    'trucks',
    'staffs',
    'transportations',
    'vendors',
    'drivers',
    'brokers',
    'customers',
  ],
  storage: AsyncStorage,
};

const createReducer = (asyncReducers) => {
  var reducers = Object.assign({}, reducer, asyncReducers);
  var appReducer = combineReducers(reducers)
  return persistReducer(config, appReducer);
}



const reduxFirebaseConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const enhancer = compose(
  applyMiddleware(thunk),
  devToolsEnhancer({ realtime: true }),
  // reactReduxFirebase(firebase, reduxFirebaseConfig),
  reduxFirestore(firebase, reduxFirebaseConfig),
);

const configureStore = () => {
  const store = createStore(
    createReducer(),
    undefined,
    enhancer,
    
  );

  const persistor = persistStore(store);
  store.persistor = persistor;
  // persistor.purge();
  return { persistor, store };
};

const { persistor, store } = configureStore();
store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  store.persistor.persist();
  return store;
};

export const rrfProps = {
  firebase,
  config: reduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export { persistor, store };
