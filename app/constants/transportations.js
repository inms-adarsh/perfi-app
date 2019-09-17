import R from 'ramda';

export const transportationsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === transportationsTypes.expense;

export const isIncome = type => type === transportationsTypes.income;

const incomeTransportations = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseTransportations = [
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

const withType = type => transportation => ({ ...transportation, type });
const allWithType = type => R.map(withType(type));

export const defaultTransportations = [
  ...allWithType(transportationsTypes.income)(incomeTransportations),
  ...allWithType(transportationsTypes.expense)(expenseTransportations),
];
