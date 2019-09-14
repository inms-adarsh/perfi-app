import { handleActions } from 'redux-actions';
import types from './types';
import { defaultAppliances } from '../../constants/appliances';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createAppliance = ({ name, type,/*-- ADD PROPS --*/ }) => ({ name, type,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultAppliances);

const appliancesReducer = handleActions({
  [types.CREATE_APPLIANCE]: (state, { payload }) => insert(state, createAppliance(payload)),
  [types.UPDATE_APPLIANCE]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_APPLIANCE]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_APPLIANCE]: (state, { payload }) => {
    return { ...state,
      appliance: payload
    }
  },
}, initialState);

export default appliancesReducer;
