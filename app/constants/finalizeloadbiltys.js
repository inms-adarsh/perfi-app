import R from 'ramda';

export const finalizeloadbiltysTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === finalizeloadbiltysTypes.expense;

export const isIncome = type => type === finalizeloadbiltysTypes.income;

const incomeFinalizeLoadBiltys = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseFinalizeLoadBiltys = [
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

const withType = type => finalizeloadbilty => ({ ...finalizeloadbilty, type });
const allWithType = type => R.map(withType(type));

export const defaultFinalizeLoadBiltys = [
  ...allWithType(finalizeloadbiltysTypes.income)(incomeFinalizeLoadBiltys),
  ...allWithType(finalizeloadbiltysTypes.expense)(expenseFinalizeLoadBiltys),
];
