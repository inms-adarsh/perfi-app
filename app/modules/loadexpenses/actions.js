import { createActions } from 'redux-actions';
import types from './types';

export const { createLoadExpense, updateLoadExpense, deleteLoadExpense, selectLoadExpense  } = createActions(
  types.CREATE_LOADEXPENSE,
  types.UPDATE_LOADEXPENSE,
  types.DELETE_LOADEXPENSE,
  types.SELECT_LOADEXPENSE
);

