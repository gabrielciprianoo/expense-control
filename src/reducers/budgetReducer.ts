import { addExpense, deleteExpense, getExpenseById, setBudget, updateExpense } from "../actions/bugdetActions"
import { Category, DraftExpense, Expense } from "../types"

export type BudgetActions = 
    { type: "SET_BUDGET", payload: { budget: number } } |
    { type: "SHOW_EXPENSE_MODAL"} |
    { type: "HIDE_EXPENSE_MODAL"} |
    { type: "ADD_EXPENSE", payload: { expense: DraftExpense} } |
    { type: "DELETE_EXPENSE", payload: { id: Expense["id"] } } |
    { type: "UPDATE_EXPENSE", payload: { expense: Expense } } |
    { type: "GET_EXPENSE_BY_ID", payload: { id: Expense["id"] } } |
    { type: "RESET_APP" } |
    { type: "FIlTER_EXPENSES", payload: { category: Category["id"] } }

export type BudgetState = {
    budget: number,
    modal: boolean
    expenses: Expense[],
    editingId: Expense["id"],
    filterId: Category["id"]
}

const initialBuget = () : number => {
    const localStorageBudget = localStorage.getItem('budget');
    return localStorageBudget ? +localStorageBudget : 0;
}

const intitialExpenses = () : Expense[] => {
    const localStorageExpenses = localStorage.getItem('expenses');
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : [];
}

export const initialState : BudgetState = {
    budget: initialBuget(),
    modal: false,
    expenses: intitialExpenses(),
    editingId: '',
    filterId: ''
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
            return {...state, modal: false, editingId: ''}
        case "ADD_EXPENSE":
            return addExpense(state, action.payload.expense);
        case "DELETE_EXPENSE":
            return deleteExpense(state, action.payload.id);
        case "GET_EXPENSE_BY_ID":
            return getExpenseById(state, action.payload.id);
        case "UPDATE_EXPENSE":
            return updateExpense(state, action.payload.expense);
        case "RESET_APP":
            return {...state, budget: 0, expenses: []}
        case "FIlTER_EXPENSES":
            return {...state, filterId: action.payload.category }
        default:
            return state
    }
}