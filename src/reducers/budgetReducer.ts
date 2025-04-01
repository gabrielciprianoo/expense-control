import { setBudget } from "../actions/bugdetActions"

export type BudgetActions = 
    {type: "SET_BUDGET", payload: { budget: number}} 

export type BudgetState = {
    budget: number
}

export const initialState : BudgetState = {
    budget: 0
}

export const budgetReducer = (
    state : BudgetState = initialState,
    action: BudgetActions
) => {
    switch (action.type) {
        case "SET_BUDGET":
            return setBudget(state)
        default:
            return state
    }
}