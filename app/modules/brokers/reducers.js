import { handleActions } from 'redux-actions';
import types from './types';
import { defaultBrokers } from '../../constants/brokers';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createBroker = ({ name, phone, email, address, gst, type,/*-- ADD PROPS --*/ }) => ({ name, phone, email, address, gst, type,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultBrokers);

const brokersReducer = handleActions({
  [types.CREATE_BROKER]: (state, { payload }) => insert(state, createBroker(payload)),
  [types.UPDATE_BROKER]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_BROKER]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_BROKER]: (state, { payload }) => {
    return { ...state,
      broker: payload
    }
  },
}, initialState);

export default brokersReducer;
