import { handleActions } from 'redux-actions';
import types from './types';
import { defaultTransportations } from '../../constants/transportations';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createTransportation = ({ name, phone, email, address, gst,/*-- ADD PROPS --*/ }) => ({ name, phone, email, address, gst,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultTransportations);

const transportationsReducer = handleActions({
  [types.CREATE_TRANSPORTATION]: (state, { payload }) => insert(state, createTransportation(payload)),
  [types.UPDATE_TRANSPORTATION]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRANSPORTATION]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_TRANSPORTATION]: (state, { payload }) => {
    return { ...state,
      transportation: payload
    }
  },
}, initialState);

export default transportationsReducer;
