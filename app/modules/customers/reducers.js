import { handleActions } from 'redux-actions';
import types from './types';
import { defaultCustomers } from '../../constants/customers';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createCustomer = ({ name, phone, email, gst, address,/*-- ADD PROPS --*/ }) => ({ name, phone, email, gst, address,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultCustomers);

const customersReducer = handleActions({
  [types.CREATE_CUSTOMER]: (state, { payload }) => insert(state, createCustomer(payload)),
  [types.UPDATE_CUSTOMER]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_CUSTOMER]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_CUSTOMER]: (state, { payload }) => {
    return { ...state,
      customer: payload
    }
  },
}, initialState);

export default customersReducer;
