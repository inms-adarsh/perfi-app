import { handleActions } from 'redux-actions';
import types from './types';
import { defaultDrivers } from '../../constants/drivers';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createDriver = ({ name, type,/*-- ADD PROPS --*/ }) => ({ name, type,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultDrivers);

const driversReducer = handleActions({
  [types.CREATE_DRIVER]: (state, { payload }) => insert(state, createDriver(payload)),
  [types.UPDATE_DRIVER]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_DRIVER]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_DRIVER]: (state, { payload }) => {
    return { ...state,
      driver: payload
    }
  },
}, initialState);

export default driversReducer;
