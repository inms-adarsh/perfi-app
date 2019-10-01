import R from 'ramda';

export const loadpaymentsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === loadpaymentsTypes.expense;

export const isIncome = type => type === loadpaymentsTypes.income;

const incomeLoadPayments = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseLoadPayments = [
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

const withType = type => loadpayment => ({ ...loadpayment, type });
const allWithType = type => R.map(withType(type));

export const defaultLoadPayments = [
  ...allWithType(loadpaymentsTypes.income)(incomeLoadPayments),
  ...allWithType(loadpaymentsTypes.expense)(expenseLoadPayments),
];
