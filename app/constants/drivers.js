import R from 'ramda';

export const driversTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === driversTypes.expense;

export const isIncome = type => type === driversTypes.income;

const incomeDrivers = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseDrivers = [
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

const withType = type => driver => ({ ...driver, type });
const allWithType = type => R.map(withType(type));

export const defaultDrivers = [
  ...allWithType(driversTypes.income)(incomeDrivers),
  ...allWithType(driversTypes.expense)(expenseDrivers),
];
