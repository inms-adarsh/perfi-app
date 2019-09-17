import { createSelector } from 'reselect';
import R from 'ramda';

const getStaffsIds = staffs => R.pathOr([], ['ids'], staffs);
export const getStaffsEntities = staffs => R.pathOr({}, ['byId'], staffs);


export const getIncomeStaff = createSelector(
  [
    getStaffsIds,
    getStaffsEntities,
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


export const getExpenseStaff = createSelector(
  [
    getStaffsIds,
    getStaffsEntities,
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
