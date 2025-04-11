import type { BudgetState } from "../reducers/budgetReducer";
import type { DraftExpense, Expense } from "../types";
import { v4 as uuid } from "uuid";

export const setBudget = (state: BudgetState, budget: number): BudgetState => {
  return {
    ...state,
    budget: budget,
  };
};

export const addExpense = (
  state: BudgetState,
  expense: DraftExpense
): BudgetState => {
  const newExpense: Expense = {
    ...expense,
    id: uuid(),
  };

  return {
    ...state,
    expenses: [...state.expenses, newExpense],
  };
};

export const deleteExpense = (
  state: BudgetState,
  id: Expense["id"]
): BudgetState => {
  return {
    ...state,
    expenses: state.expenses.filter((expense) => expense.id !== id),
  };
};

export const getExpenseById = (
  state: BudgetState,
  id: Expense["id"]
): BudgetState => {
  return {
    ...state,
    editingId: id,
    modal: true,
  };
};


export const updateExpense = (
  state: BudgetState,
  expense: Expense
): BudgetState => {
  const newExpenses = state.expenses.map((exp) => {
    if (exp.id === expense.id) {
      return expense;
    }
    return exp;
  });

  return {
    ...state,
    expenses: newExpenses,
    editingId: "",
    modal: false,
  };
};
