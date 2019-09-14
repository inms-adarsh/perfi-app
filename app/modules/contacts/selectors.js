import { createSelector } from 'reselect';
import R from 'ramda';

const getContactsIds = contacts => R.pathOr([], ['ids'], contacts);
export const getContactsEntities = contacts => R.pathOr({}, ['byId'], contacts);


export const getIncomeContact = createSelector(
  [
    getContactsIds,
    getContactsEntities,
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


export const getExpenseContact = createSelector(
  [
    getContactsIds,
    getContactsEntities,
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
