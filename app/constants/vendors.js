import R from 'ramda';

export const vendorsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === vendorsTypes.expense;

export const isIncome = type => type === vendorsTypes.income;

const incomeVendors = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseVendors = [
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

const withType = type => vendor => ({ ...vendor, type });
const allWithType = type => R.map(withType(type));

export const defaultVendors = [
  ...allWithType(vendorsTypes.income)(incomeVendors),
  ...allWithType(vendorsTypes.expense)(expenseVendors),
];
