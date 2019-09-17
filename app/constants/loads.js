import R from 'ramda';

export const loadsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === loadsTypes.expense;

export const isIncome = type => type === loadsTypes.income;

const incomeLoads = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseLoads = [
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

const withType = type => load => ({ ...load, type });
const allWithType = type => R.map(withType(type));

export const defaultLoads = [
  ...allWithType(loadsTypes.income)(incomeLoads),
  ...allWithType(loadsTypes.expense)(expenseLoads),
];
