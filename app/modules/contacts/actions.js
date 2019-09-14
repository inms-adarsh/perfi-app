import { createActions } from 'redux-actions';
import types from './types';

export const { createContact, updateContact, deleteContact, selectContact  } = createActions(
  types.CREATE_CONTACT,
  types.UPDATE_CONTACT,
  types.DELETE_CONTACT,
  types.SELECT_CONTACT
);

