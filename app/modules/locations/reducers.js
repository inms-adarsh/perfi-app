import { handleActions } from 'redux-actions';
import types from './types';
import { defaultLocations } from '../../constants/locations';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createLocation = ({ name, contactName,/*-- ADD PROPS --*/ }) => ({ name, contactName,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultLocations);

const locationsReducer = handleActions({
  [types.CREATE_LOCATION]: (state, { payload }) => insert(state, createLocation(payload)),
  [types.UPDATE_LOCATION]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_LOCATION]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_LOCATION]: (state, { payload }) => {
    return { ...state,
      location: payload
    }
  },
}, initialState);

export default locationsReducer;
