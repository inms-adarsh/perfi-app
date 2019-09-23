import { createActions } from 'redux-actions';
import types from './types';

export const { createCheckCall, updateCheckCall, deleteCheckCall, selectCheckCall  } = createActions(
  types.CREATE_CHECKCALL,
  types.UPDATE_CHECKCALL,
  types.DELETE_CHECKCALL,
  types.SELECT_CHECKCALL
);

