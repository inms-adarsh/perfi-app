import { handleActions } from 'redux-actions';
import types from './types';
import { defaultItems } from '../../constants/items';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createItem = ({ name, weight, unit, rate, freight, packet,/*-- ADD PROPS --*/ }) => ({ name, weight, unit, rate, freight, packet,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultItems);

const itemsReducer = handleActions({
  [types.CREATE_ITEM]: (state, { payload }) => insert(state, createItem(payload)),
  [types.UPDATE_ITEM]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_ITEM]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_ITEM]: (state, { payload }) => {
    return { ...state,
      item: payload
    }
  },
}, initialState);

export default itemsReducer;
