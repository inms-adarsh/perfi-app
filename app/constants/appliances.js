import R from 'ramda';

export const appliancesTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === appliancesTypes.expense;

export const isIncome = type => type === appliancesTypes.income;

const incomeAppliances = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseAppliances = [
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

const withType = type => appliance => ({ ...appliance, type });
const allWithType = type => R.map(withType(type));

export const defaultAppliances = [
  ...allWithType(appliancesTypes.income)(incomeAppliances),
  ...allWithType(appliancesTypes.expense)(expenseAppliances),
];
