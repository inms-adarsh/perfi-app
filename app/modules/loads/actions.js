import { createActions } from 'redux-actions';
import types from './types';

export const { createLoad, updateLoad, deleteLoad, selectLoad  } = createActions(
  types.CREATE_LOAD,
  types.UPDATE_LOAD,
  types.DELETE_LOAD,
  types.SELECT_LOAD
);

