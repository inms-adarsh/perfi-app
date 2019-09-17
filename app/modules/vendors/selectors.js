import { createSelector } from 'reselect';
import R from 'ramda';

const getVendorsIds = vendors => R.pathOr([], ['ids'], vendors);
export const getVendorsEntities = vendors => R.pathOr({}, ['byId'], vendors);


export const getIncomeVendor = createSelector(
  [
    getVendorsIds,
    getVendorsEntities,
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


export const getExpenseVendor = createSelector(
  [
    getVendorsIds,
    getVendorsEntities,
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
