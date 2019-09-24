import R from 'ramda';

export const driversettlementsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === driversettlementsTypes.expense;

export const isIncome = type => type === driversettlementsTypes.income;

const incomeDriverSettlements = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseDriverSettlements = [
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

const withType = type => driversettlement => ({ ...driversettlement, type });
const allWithType = type => R.map(withType(type));

export const defaultDriverSettlements = [
  ...allWithType(driversettlementsTypes.income)(incomeDriverSettlements),
  ...allWithType(driversettlementsTypes.expense)(expenseDriverSettlements),
];
