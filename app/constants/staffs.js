import R from 'ramda';

export const staffsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === staffsTypes.expense;

export const isIncome = type => type === staffsTypes.income;

const incomeStaffs = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseStaffs = [
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

const withType = type => staff => ({ ...staff, type });
const allWithType = type => R.map(withType(type));

export const defaultStaffs = [
  ...allWithType(staffsTypes.income)(incomeStaffs),
  ...allWithType(staffsTypes.expense)(expenseStaffs),
];
