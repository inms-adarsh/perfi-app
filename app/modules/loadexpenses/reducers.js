import { handleActions } from 'redux-actions';
import types from './types';
import { defaultLoadExpenses } from '../../constants/loadexpenses';
import { insert, insertAll, update, removeId } from '../../utils/stateHelper';

const createLoadExpense = ({ name,/*-- ADD PROPS --*/ }) => ({ name,/*-- ADD PROPS --*/ });

const initialState = insertAll({}, defaultLoadExpenses);

const loadexpensesReducer = handleActions({
  [types.CREATE_LOADEXPENSE]: (state, { payload }) => insert(state, createLoadExpense(payload)),
  [types.UPDATE_LOADEXPENSE]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_LOADEXPENSE]: (state, { payload }) => removeId(state, payload),
  [types.SELECT_LOADEXPENSE]: (state, { payload }) => {
    return { ...state,
      loadexpense: payload
    }
  },
}, initialState);

export default loadexpensesReducer;
