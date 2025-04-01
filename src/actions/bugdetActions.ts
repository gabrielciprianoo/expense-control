import { BudgetState } from "../reducers/budgetReducer";


export function setBudget (state : BudgetState) {
    console.log("setBudget action")
    return {
        ...state
    }
}