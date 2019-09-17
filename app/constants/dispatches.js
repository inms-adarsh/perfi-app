import R from 'ramda';

export const dispatchesTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === dispatchesTypes.expense;

export const isIncome = type => type === dispatchesTypes.income;

const incomeDispatches = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseDispatches = [
  { name: 'Bills', icon: 'tag' },
  { name: 'Car', icon: 'car' },
  { name: 'Communications', icon: 'phone' },
  { name: 'Eating Out', icon: 'silverware' },
  { name: 'Entertainment', icon: 'martini' },
  { name: 'Food', icon: 'food' },
  { name: 'Gifts', icon: 'gift' },
  { name: 'Health', icon: 'heart-pulse' },
  { name: 'Home', icon: 'home-variant' },
  { name: 'Pets', icon: 'cat' },
  { name: 'Sport', icon: 'dumbbell' },
  { name: 'Taxi', icon: 'taxi' },
];

const withType = type => dispatch => ({ ...dispatch, type });
const allWithType = type => R.map(withType(type));

export const defaultDispatches = [
  ...allWithType(dispatchesTypes.income)(incomeDispatches),
  ...allWithType(dispatchesTypes.expense)(expenseDispatches),
];
