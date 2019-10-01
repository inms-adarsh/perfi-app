import { handleActions } from 'redux-actions';
import types from './types';
import { defaultLoadPayments } from '../../constants/loadpayments';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createLoadPayment = ({ name,/*-- ADD PROPS --*/ }) => ({ name,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultLoadPayments);

const loadpaymentsReducer = handleActions({
  [types.CREATE_LOADPAYMENT]: (state, { payload }) => insert(state, createLoadPayment(payload)),
  [types.UPDATE_LOADPAYMENT]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_LOADPAYMENT]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_LOADPAYMENT]: (state, { payload }) => {
    return { ...state,
      loadpayment: payload
    }
  },
}, initialState);

export default loadpaymentsReducer;
