import { handleActions } from 'redux-actions';
import types from './types';
import { defaultSettings } from '../../constants/settings';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createSetting = ({ name, phone, address, pan, email, gst,/*-- ADD PROPS --*/ }) => ({ name, phone, address, pan, email, gst,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultSettings);

const settingsReducer = handleActions({
  [types.CREATE_SETTING]: (state, { payload }) => insert(state, createSetting(payload)),
  [types.UPDATE_SETTING]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_SETTING]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_SETTING]: (state, { payload }) => {
    return { ...state,
      setting: payload
    }
  },
}, initialState);

export default settingsReducer;
