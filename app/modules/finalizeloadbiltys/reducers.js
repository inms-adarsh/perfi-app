import { handleActions } from 'redux-actions';
import types from './types';
import { defaultFinalizeLoadBiltys } from '../../constants/finalizeloadbiltys';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createFinalizeLoadBilty = ({ name,/*-- ADD PROPS --*/ }) => ({ name,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultFinalizeLoadBiltys);

const finalizeloadbiltysReducer = handleActions({
  [types.CREATE_FINALIZELOADBILTY]: (state, { payload }) => insert(state, createFinalizeLoadBilty(payload)),
  [types.UPDATE_FINALIZELOADBILTY]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_FINALIZELOADBILTY]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_FINALIZELOADBILTY]: (state, { payload }) => {
    return { ...state,
      finalizeloadbilty: payload
    }
  },
}, initialState);

export default finalizeloadbiltysReducer;
