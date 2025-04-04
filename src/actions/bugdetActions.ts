import type { BudgetState } from "../reducers/budgetReducer";
import type { DraftExpense, Expense } from "../types";
import { v4 as uuid } from "uuid";

export const setBudget = (state: BudgetState, budget: number): BudgetState => {
  console.log("presupuesto", budget);
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
