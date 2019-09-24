import R from 'ramda';

export const loadexpensesTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === loadexpensesTypes.expense;

export const isIncome = type => type === loadexpensesTypes.income;

const incomeLoadExpenses = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseLoadExpenses = [
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

const withType = type => loadexpense => ({ ...loadexpense, type });
const allWithType = type => R.map(withType(type));

export const defaultLoadExpenses = [
  ...allWithType(loadexpensesTypes.income)(incomeLoadExpenses),
  ...allWithType(loadexpensesTypes.expense)(expenseLoadExpenses),
];
