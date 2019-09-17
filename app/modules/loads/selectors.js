import { createSelector } from 'reselect';
import R from 'ramda';

const getLoadsIds = loads => R.pathOr([], ['ids'], loads);
export const getLoadsEntities = loads => R.pathOr({}, ['byId'], loads);


export const getIncomeLoad = createSelector(
  [
    getLoadsIds,
    getLoadsEntities,
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


export const getExpenseLoad = createSelector(
  [
    getLoadsIds,
    getLoadsEntities,
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
