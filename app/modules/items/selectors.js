import { createSelector } from 'reselect';
import R from 'ramda';

const getItemsIds = items => R.pathOr([], ['ids'], items);
export const getItemsEntities = items => R.pathOr({}, ['byId'], items);


export const getIncomeItem = createSelector(
  [
    getItemsIds,
    getItemsEntities,
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


export const getExpenseItem = createSelector(
  [
    getItemsIds,
    getItemsEntities,
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
