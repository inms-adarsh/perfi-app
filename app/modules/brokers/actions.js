import { createActions } from 'redux-actions';
import types from './types';

export const { createBroker, updateBroker, deleteBroker, selectBroker  } = createActions(
  types.CREATE_BROKER,
  types.UPDATE_BROKER,
  types.DELETE_BROKER,
  types.SELECT_BROKER
);

