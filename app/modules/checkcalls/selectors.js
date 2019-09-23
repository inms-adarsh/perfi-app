import { createSelector } from 'reselect';
import R from 'ramda';

const getCheckCallsIds = checkcalls => R.pathOr([], ['ids'], checkcalls);
export const getCheckCallsEntities = checkcalls => R.pathOr({}, ['byId'], checkcalls);


export const getIncomeCheckCall = createSelector(
  [
    getCheckCallsIds,
    getCheckCallsEntities,
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


export const getExpenseCheckCall = createSelector(
  [
    getCheckCallsIds,
    getCheckCallsEntities,
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
