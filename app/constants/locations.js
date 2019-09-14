import R from 'ramda';

export const locationsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === locationsTypes.expense;

export const isIncome = type => type === locationsTypes.income;

const incomeLocations = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseLocations = [
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

const withType = type => location => ({ ...location, type });
const allWithType = type => R.map(withType(type));

export const defaultLocations = [
  ...allWithType(locationsTypes.income)(incomeLocations),
  ...allWithType(locationsTypes.expense)(expenseLocations),
];
