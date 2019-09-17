import { handleActions } from 'redux-actions';
import types from './types';
import { defaultTrucks } from '../../constants/trucks';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createTruck = ({ name, capacity, unit,/*-- ADD PROPS --*/ }) => ({ name, capacity, unit,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultTrucks);

const trucksReducer = handleActions({
  [types.CREATE_TRUCK]: (state, { payload }) => insert(state, createTruck(payload)),
  [types.UPDATE_TRUCK]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_TRUCK]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_TRUCK]: (state, { payload }) => {
    return { ...state,
      truck: payload
    }
  },
}, initialState);

export default trucksReducer;
