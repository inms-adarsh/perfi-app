import { createSelector } from 'reselect';
import R from 'ramda';

const getCustomersIds = customers => R.pathOr([], ['ids'], customers);
export const getCustomersEntities = customers => R.pathOr({}, ['byId'], customers);


export const getIncomeCustomer = createSelector(
  [
    getCustomersIds,
    getCustomersEntities,
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


export const getExpenseCustomer = createSelector(
  [
    getCustomersIds,
    getCustomersEntities,
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
