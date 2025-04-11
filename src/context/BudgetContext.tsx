/* eslint-disable react-refresh/only-export-components */
import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budgetReducer";

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>,
    totalExpenses: number
    remainningBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ( {children} : BudgetProviderProps ) =>{

    const [state, dispatch] = useReducer(budgetReducer, initialState)
    

    const totalExpenses = useMemo(()=> state.expenses.reduce((total , expense) => expense.amount + total,0 ), [state.expenses])

    const remainningBudget = useMemo(() => state.budget - totalExpenses, [state.budget, totalExpenses])
   
    return (
        <BudgetContext.Provider 
            value={{
                 state,
                 dispatch,
                 totalExpenses,
                 remainningBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}