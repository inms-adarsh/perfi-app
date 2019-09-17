import R from 'ramda';

export const itemsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === itemsTypes.expense;

export const isIncome = type => type === itemsTypes.income;

const incomeItems = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseItems = [
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

const withType = type => item => ({ ...item, type });
const allWithType = type => R.map(withType(type));

export const defaultItems = [
  ...allWithType(itemsTypes.income)(incomeItems),
  ...allWithType(itemsTypes.expense)(expenseItems),
];
