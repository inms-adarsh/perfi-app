import { createSelector } from 'reselect';
import R from 'ramda';

const getTransportationsIds = transportations => R.pathOr([], ['ids'], transportations);
export const getTransportationsEntities = transportations => R.pathOr({}, ['byId'], transportations);


export const getIncomeTransportation = createSelector(
  [
    getTransportationsIds,
    getTransportationsEntities,
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


export const getExpenseTransportation = createSelector(
  [
    getTransportationsIds,
    getTransportationsEntities,
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
