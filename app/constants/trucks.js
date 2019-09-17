import R from 'ramda';

export const trucksTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === trucksTypes.expense;

export const isIncome = type => type === trucksTypes.income;

const incomeTrucks = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseTrucks = [
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

const withType = type => truck => ({ ...truck, type });
const allWithType = type => R.map(withType(type));

export const defaultTrucks = [
  ...allWithType(trucksTypes.income)(incomeTrucks),
  ...allWithType(trucksTypes.expense)(expenseTrucks),
];
