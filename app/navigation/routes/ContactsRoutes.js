import React from 'react';

import headerOptions from '../../utils/stackHeaderOptions';
import { CustomersNavigator, BrokersNavigator, DriversNavigator, StaffsNavigator, TransportationsNavigator, VendorsNavigator } from '../navigators'
import Icon from 'react-native-vector-icons/FontAwesome';

const Routes = {
  ['CustomersRoutes']: {
    screen: CustomersNavigator,
    navigationOptions: headerOptions({
      title: 'Customers',
      tabBarIcon: ({ focused }) => (
        <Icon name='users' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),

  },
  ['BrokersRoutes']: {
    screen: BrokersNavigator,
    navigationOptions: headerOptions({
      title: 'Brokers', tabBarIcon: ({ focused }) => (
        <Icon name='child' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    }),
  },
  ['DriversRoutes']: {
    screen: DriversNavigator,
    navigationOptions: headerOptions({
      title: 'Drivers',
      tabBarIcon: ({ focused }) => (
        <Icon name='street-view' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    })
  },
  ['StaffsRoutes']: {
    screen: StaffsNavigator,
    navigationOptions: headerOptions({
      title: 'Staffs',
      tabBarIcon: ({ focused }) => (
        <Icon name='user' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    })
  },
  ['VendorsRoutes']: {
    screen: VendorsNavigator,
    navigationOptions: headerOptions({
      title: 'Vendors',
      tabBarIcon: ({ focused }) => (
        <Icon name='user' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    })
  },
  ['TransportationsRoutes']: {
    screen: TransportationsNavigator,
    navigationOptions: headerOptions({
      title: 'Transportations',
      tabBarIcon: ({ focused }) => (
        <Icon name='user' size={26} color={focused ? '#2f95dc' : '#ccc'} />
      ),
    })
  },
  /*-- SCREENS --*/
};

export default Routes;
