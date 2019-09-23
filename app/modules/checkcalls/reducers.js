import { handleActions } from 'redux-actions';
import types from './types';
import { defaultCheckCalls } from '../../constants/checkcalls';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createCheckCall = ({ name, truck, odometer, activity, reason, currentLocation, date, notes,/*-- ADD PROPS --*/ }) => ({ name, truck, odometer, activity, reason, currentLocation, date, notes,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultCheckCalls);

const checkcallsReducer = handleActions({
  [types.CREATE_CHECKCALL]: (state, { payload }) => insert(state, createCheckCall(payload)),
  [types.UPDATE_CHECKCALL]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_CHECKCALL]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_CHECKCALL]: (state, { payload }) => {
    return { ...state,
      checkcall: payload
    }
  },
}, initialState);

export default checkcallsReducer;
