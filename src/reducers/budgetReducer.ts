import { setBudget } from "../actions/bugdetActions"

export type BudgetActions = 
    {type: "SET_BUDGET", payload: { budget: number}} |
    {type: "SHOW_EXPENSE_MODAL"} |
    {type: "HIDE_EXPENSE_MODAL"} 

export type BudgetState = {
    budget: number,
    modal: boolean
}

export const initialState : BudgetState = {
    budget: 0,
    modal: false
}

export const budgetReducer = (
    state : BudgetState = initialState,
    action: BudgetActions
) => {
    switch (action.type) {
        case "SET_BUDGET":
            return setBudget(state, action.payload.budget)
        case "SHOW_EXPENSE_MODAL":
            return {...state, modal: true}
        case "HIDE_EXPENSE_MODAL":
            return {...state, modal: false}
        default:
            return state
    }
}