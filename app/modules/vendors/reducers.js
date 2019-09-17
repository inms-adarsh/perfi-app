import { handleActions } from 'redux-actions';
import types from './types';
import { defaultVendors } from '../../constants/vendors';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createVendor = ({ name, phone, address, email, account, gst,/*-- ADD PROPS --*/ }) => ({ name, phone, address, email, account, gst,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultVendors);

const vendorsReducer = handleActions({
  [types.CREATE_VENDOR]: (state, { payload }) => insert(state, createVendor(payload)),
  [types.UPDATE_VENDOR]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_VENDOR]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_VENDOR]: (state, { payload }) => {
    return { ...state,
      vendor: payload
    }
  },
}, initialState);

export default vendorsReducer;
