import { createSelector } from 'reselect';
import R from 'ramda';

const getFinalizeLoadBiltysIds = finalizeloadbiltys => R.pathOr([], ['ids'], finalizeloadbiltys);
export const getFinalizeLoadBiltysEntities = finalizeloadbiltys => R.pathOr({}, ['byId'], finalizeloadbiltys);


export const getIncomeFinalizeLoadBilty = createSelector(
  [
    getFinalizeLoadBiltysIds,
    getFinalizeLoadBiltysEntities,
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


export const getExpenseFinalizeLoadBilty = createSelector(
  [
    getFinalizeLoadBiltysIds,
    getFinalizeLoadBiltysEntities,
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
