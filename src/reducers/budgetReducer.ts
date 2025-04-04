import { addExpense, deleteExpense, setBudget } from "../actions/bugdetActions"
import { DraftExpense, Expense } from "../types"

export type BudgetActions = 
    {type: "SET_BUDGET", payload: { budget: number}} |
    {type: "SHOW_EXPENSE_MODAL"} |
    {type: "HIDE_EXPENSE_MODAL"} |
    {type: "ADD_EXPENSE", payload: { expense: DraftExpense}} |
    {type: "DELETE_EXPENSE", payload: { id: Expense["id"]}} 

export type BudgetState = {
    budget: number,
    modal: boolean
    expenses: Expense[]
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}

export const budgetReducer = (
    state : BudgetState = initialState,
    action: BudgetActions
) => {
    switch (action.type) {
        case "SET_BUDGET":
            return setBudget(state, action.payload.budget);
        case "SHOW_EXPENSE_MODAL":
            return {...state, modal: true}
        case "HIDE_EXPENSE_MODAL":
            return {...state, modal: false}
        case "ADD_EXPENSE":
            return addExpense(state, action.payload.expense);
        case "DELETE_EXPENSE":
            return deleteExpense(state, action.payload.id);
        default:
            return state
    }
}