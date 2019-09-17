import R from 'ramda';

export const brokersTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === brokersTypes.expense;

export const isIncome = type => type === brokersTypes.income;

const incomeBrokers = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseBrokers = [
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

const withType = type => broker => ({ ...broker, type });
const allWithType = type => R.map(withType(type));

export const defaultBrokers = [
  ...allWithType(brokersTypes.income)(incomeBrokers),
  ...allWithType(brokersTypes.expense)(expenseBrokers),
];
