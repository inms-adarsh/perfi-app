
import React from 'react';
import screens from '../../constants/screens';
import { LoadDetails,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';
import CheckCallsNavigator from '../navigators/CheckCallsNavigator';
import LoadExpensesNavigator from '../navigators/LoadExpensesNavigator';
import LoadPaymentsNavigator from '../navigators/LoadPaymentsNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import DriverSettlementsNavigator from '../navigators/DriverSettlementsNavigator';
import FinalizeLoadBiltysNavigator from '../navigators/FinalizeLoadBiltysNavigator';

const Routes = {
  ['LoadDetails']: {
    screen: LoadDetails,
    navigationOptions: headerOptions({
      title: 'Details',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
  [screens.FinalizeLoadBiltysRoot]: {
    screen: FinalizeLoadBiltysNavigator,
    navigationOptions: headerOptions({
      title: 'Finalize Bilty',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
  [screens.CheckCalls]: {
    screen: CheckCallsNavigator,
    navigationOptions: headerOptions({
      title: 'Check Calls',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
 
  [screens.LoadExpensesRoot]: {
    screen: LoadExpensesNavigator,
    navigationOptions: headerOptions({
      title: 'Expenses',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
  [screens.LoadPaymentsRoot]: {
    screen: LoadPaymentsNavigator,
    navigationOptions: headerOptions({
      title: 'Payments',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
  [screens.DriverSettlementsRoot]: {
    screen: DriverSettlementsNavigator,
    navigationOptions: headerOptions({
      title: 'Driver Settlements',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
};

export default Routes;