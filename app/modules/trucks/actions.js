import { createActions } from 'redux-actions';
import types from './types';

export const { createTruck, updateTruck, deleteTruck, selectTruck  } = createActions(
  types.CREATE_TRUCK,
  types.UPDATE_TRUCK,
  types.DELETE_TRUCK,
  types.SELECT_TRUCK
);

