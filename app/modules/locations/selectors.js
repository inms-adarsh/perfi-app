import { createSelector } from 'reselect';
import R from 'ramda';

const getLocationsIds = locations => R.pathOr([], ['ids'], locations);
export const getLocationsEntities = locations => R.pathOr({}, ['byId'], locations);


export const getIncomeLocation = createSelector(
  [
    getLocationsIds,
    getLocationsEntities,
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


export const getExpenseLocation = createSelector(
  [
    getLocationsIds,
    getLocationsEntities,
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
