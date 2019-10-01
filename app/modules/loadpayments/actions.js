import { createActions } from 'redux-actions';
import types from './types';

export const { createLoadPayment, updateLoadPayment, deleteLoadPayment, selectLoadPayment  } = createActions(
  types.CREATE_LOADPAYMENT,
  types.UPDATE_LOADPAYMENT,
  types.DELETE_LOADPAYMENT,
  types.SELECT_LOADPAYMENT
);

