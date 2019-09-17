import { handleActions } from 'redux-actions';
import types from './types';
import { defaultStaffs } from '../../constants/staffs';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createStaff = ({ name, phone, email, address,/*-- ADD PROPS --*/ }) => ({ name, phone, email, address,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultStaffs);

const staffsReducer = handleActions({
  [types.CREATE_STAFF]: (state, { payload }) => insert(state, createStaff(payload)),
  [types.UPDATE_STAFF]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_STAFF]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_STAFF]: (state, { payload }) => {
    return { ...state,
      staff: payload
    }
  },
}, initialState);

export default staffsReducer;
