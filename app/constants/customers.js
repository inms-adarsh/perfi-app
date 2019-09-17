import R from 'ramda';

export const customersTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === customersTypes.expense;

export const isIncome = type => type === customersTypes.income;

const incomeCustomers = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseCustomers = [
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

const withType = type => customer => ({ ...customer, type });
const allWithType = type => R.map(withType(type));

export const defaultCustomers = [
  ...allWithType(customersTypes.income)(incomeCustomers),
  ...allWithType(customersTypes.expense)(expenseCustomers),
];
