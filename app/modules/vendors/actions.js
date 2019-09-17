import { createActions } from 'redux-actions';
import types from './types';

export const { createVendor, updateVendor, deleteVendor, selectVendor  } = createActions(
  types.CREATE_VENDOR,
  types.UPDATE_VENDOR,
  types.DELETE_VENDOR,
  types.SELECT_VENDOR
);

