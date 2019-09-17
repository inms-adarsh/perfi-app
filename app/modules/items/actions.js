import { createActions } from 'redux-actions';
import types from './types';

export const { createItem, updateItem, deleteItem, selectItem  } = createActions(
  types.CREATE_ITEM,
  types.UPDATE_ITEM,
  types.DELETE_ITEM,
  types.SELECT_ITEM
);

