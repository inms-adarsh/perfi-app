import R from 'ramda';

export const contactsTypes = {
  expense: 'Expense',
  income: 'Income',
};

export const isExpense = type => type === contactsTypes.expense;

export const isIncome = type => type === contactsTypes.income;

const incomeContacts = [
  { name: 'Salary', icon: 'cash' },
  { name: 'Savings', icon: 'coin' },
  { name: 'Deposits', icon: 'castle' },
];

const expenseContacts = [
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

const withType = type => contact => ({ ...contact, type });
const allWithType = type => R.map(withType(type));

export const defaultContacts = [
  ...allWithType(contactsTypes.income)(incomeContacts),
  ...allWithType(contactsTypes.expense)(expenseContacts),
];
