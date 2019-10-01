import { createSelector } from 'reselect';
import R from 'ramda';

const getLoadPaymentsIds = loadpayments => R.pathOr([], ['ids'], loadpayments);
export const getLoadPaymentsEntities = loadpayments => R.pathOr({}, ['byId'], loadpayments);


export const getIncomeLoadPayment = createSelector(
  [
    getLoadPaymentsIds,
    getLoadPaymentsEntities,
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


export const getExpenseLoadPayment = createSelector(
  [
    getLoadPaymentsIds,
    getLoadPaymentsEntities,
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
