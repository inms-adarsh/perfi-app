import { createSelector } from 'reselect';
import R from 'ramda';

const getBrokersIds = brokers => R.pathOr([], ['ids'], brokers);
export const getBrokersEntities = brokers => R.pathOr({}, ['byId'], brokers);


export const getIncomeBroker = createSelector(
  [
    getBrokersIds,
    getBrokersEntities,
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


export const getExpenseBroker = createSelector(
  [
    getBrokersIds,
    getBrokersEntities,
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
