
import React from 'react';
import screens from '../../constants/screens';
import { LoadDetails,/*-- IMPORT SCREENS --*/ } from '../../screens';
import headerOptions from '../../utils/stackHeaderOptions';
import CheckCallsNavigator from '../navigators/CheckCallsNavigator';
import LoadExpensesNavigator from '../navigators/LoadExpensesNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  [screens.CheckCalls]: {
    screen: CheckCallsNavigator,
    navigationOptions: headerOptions({
      title: 'Check Calls',
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
};

export default Routes;