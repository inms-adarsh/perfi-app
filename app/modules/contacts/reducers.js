import { handleActions } from 'redux-actions';
import types from './types';
import { defaultContacts } from '../../constants/contacts';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createContact = ({ name, locationName, location, driver,/*-- ADD PROPS --*/ }) => ({ name, locationName, location, driver,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultContacts);

const contactsReducer = handleActions({
  [types.CREATE_CONTACT]: (state, { payload }) => insert(state, createContact(payload)),
  [types.UPDATE_CONTACT]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_CONTACT]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_CONTACT]: (state, { payload }) => {
    return { ...state,
      contact: payload
    }
  },
}, initialState);

export default contactsReducer;
