import { createActions } from 'redux-actions';
import types from './types';

export const { createTransportation, updateTransportation, deleteTransportation, selectTransportation  } = createActions(
  types.CREATE_TRANSPORTATION,
  types.UPDATE_TRANSPORTATION,
  types.DELETE_TRANSPORTATION,
  types.SELECT_TRANSPORTATION
);

