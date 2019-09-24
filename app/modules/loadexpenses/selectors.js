import { createSelector } from 'reselect';
import R from 'ramda';

const getLoadExpensesIds = loadexpenses => R.pathOr([], ['ids'], loadexpenses);
export const getLoadExpensesEntities = loadexpenses => R.pathOr({}, ['byId'], loadexpenses);


export const getIncomeLoadExpense = createSelector(
  [
    getLoadExpensesIds,
    getLoadExpensesEntities,
  ],

  (ids, entities) => {
    const newArr = [];
    ids.forEach((id) => {
      if (entities[id].type === 'Income') {
        newArr.push(entities[id]);
      }
    });
    return newArr;
  },
);


export const getExpenseLoadExpense = createSelector(
  [
    getLoadExpensesIds,
    getLoadExpensesEntities,
  ],

  (ids, entities) => {
    const newArr = [];
    ids.forEach((id) => {
      if (entities[id].type === 'Expense') {
        newArr.push(entities[id]);
      }
    });
    return newArr;
  },
);
