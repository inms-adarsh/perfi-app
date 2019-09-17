import R from 'ramda';

export const settingsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === settingsTypes.expense;

export const isIncome = type => type === settingsTypes.income;

const incomeSettings = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseSettings = [
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

const withType = type => setting => ({ ...setting, type });
const allWithType = type => R.map(withType(type));

export const defaultSettings = [
  ...allWithType(settingsTypes.income)(incomeSettings),
  ...allWithType(settingsTypes.expense)(expenseSettings),
];
