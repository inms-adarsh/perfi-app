import { createActions } from 'redux-actions';
import types from './types';

export const { createStaff, updateStaff, deleteStaff, selectStaff  } = createActions(
  types.CREATE_STAFF,
  types.UPDATE_STAFF,
  types.DELETE_STAFF,
  types.SELECT_STAFF
);

