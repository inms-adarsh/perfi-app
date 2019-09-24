import { handleActions } from 'redux-actions';
import types from './types';
import { defaultDriverSettlements } from '../../constants/driversettlements';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createDriverSettlement = ({ name,/*-- ADD PROPS --*/ }) => ({ name,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultDriverSettlements);

const driversettlementsReducer = handleActions({
  [types.CREATE_DRIVERSETTLEMENT]: (state, { payload }) => insert(state, createDriverSettlement(payload)),
  [types.UPDATE_DRIVERSETTLEMENT]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_DRIVERSETTLEMENT]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_DRIVERSETTLEMENT]: (state, { payload }) => {
    return { ...state,
      driversettlement: payload
    }
  },
}, initialState);

export default driversettlementsReducer;
