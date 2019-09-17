import { createSelector } from 'reselect';
import R from 'ramda';

const getTrucksIds = trucks => R.pathOr([], ['ids'], trucks);
export const getTrucksEntities = trucks => R.pathOr({}, ['byId'], trucks);


export const getIncomeTruck = createSelector(
  [
    getTrucksIds,
    getTrucksEntities,
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


export const getExpenseTruck = createSelector(
  [
    getTrucksIds,
    getTrucksEntities,
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
