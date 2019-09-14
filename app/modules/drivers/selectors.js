import { createSelector } from 'reselect';
import R from 'ramda';

const getDriversIds = drivers => R.pathOr([], ['ids'], drivers);
export const getDriversEntities = drivers => R.pathOr({}, ['byId'], drivers);


export const getIncomeDriver = createSelector(
  [
    getDriversIds,
    getDriversEntities,
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


export const getExpenseDriver = createSelector(
  [
    getDriversIds,
    getDriversEntities,
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
