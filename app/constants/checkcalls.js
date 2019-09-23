import R from 'ramda';

export const checkcallsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === checkcallsTypes.expense;

export const isIncome = type => type === checkcallsTypes.income;

const incomeCheckCalls = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseCheckCalls = [
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

const withType = type => checkcall => ({ ...checkcall, type });
const allWithType = type => R.map(withType(type));

export const defaultCheckCalls = [
  ...allWithType(checkcallsTypes.income)(incomeCheckCalls),
  ...allWithType(checkcallsTypes.expense)(expenseCheckCalls),
];
