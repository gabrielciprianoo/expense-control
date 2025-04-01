import { BudgetState } from "../reducers/budgetReducer";


export function setBudget (state : BudgetState, budget: number) {
    console.log("presupuesto", budget)
    return {
        ...state,
        budget: budget
    }
}