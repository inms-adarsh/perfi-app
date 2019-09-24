import { createSelector } from 'reselect';
import R from 'ramda';

const getDriverSettlementsIds = driversettlements => R.pathOr([], ['ids'], driversettlements);
export const getDriverSettlementsEntities = driversettlements => R.pathOr({}, ['byId'], driversettlements);


export const getIncomeDriverSettlement = createSelector(
  [
    getDriverSettlementsIds,
    getDriverSettlementsEntities,
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


export const getExpenseDriverSettlement = createSelector(
  [
    getDriverSettlementsIds,
    getDriverSettlementsEntities,
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
