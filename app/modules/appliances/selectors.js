import { createSelector } from 'reselect';
import R from 'ramda';

const getAppliancesIds = appliances => R.pathOr([], ['ids'], appliances);
export const getAppliancesEntities = appliances => R.pathOr({}, ['byId'], appliances);


export const getIncomeAppliance = createSelector(
  [
    getAppliancesIds,
    getAppliancesEntities,
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


export const getExpenseAppliance = createSelector(
  [
    getAppliancesIds,
    getAppliancesEntities,
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
