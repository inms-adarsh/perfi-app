import { createActions } from 'redux-actions';
import types from './types';

export const { createCustomer, updateCustomer, deleteCustomer, selectCustomer  } = createActions(
  types.CREATE_CUSTOMER,
  types.UPDATE_CUSTOMER,
  types.DELETE_CUSTOMER,
  types.SELECT_CUSTOMER
);

