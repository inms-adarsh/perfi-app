import { createActions } from 'redux-actions';
import types from './types';

export const { createLocation, updateLocation, deleteLocation, selectLocation  } = createActions(
  types.CREATE_LOCATION,
  types.UPDATE_LOCATION,
  types.DELETE_LOCATION,
  types.SELECT_LOCATION
);

