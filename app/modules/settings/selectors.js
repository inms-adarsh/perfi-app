import { createSelector } from 'reselect';
import R from 'ramda';

const getSettingsIds = settings => R.pathOr([], ['ids'], settings);
export const getSettingsEntities = settings => R.pathOr({}, ['byId'], settings);


export const getIncomeSetting = createSelector(
  [
    getSettingsIds,
    getSettingsEntities,
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


export const getExpenseSetting = createSelector(
  [
    getSettingsIds,
    getSettingsEntities,
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
