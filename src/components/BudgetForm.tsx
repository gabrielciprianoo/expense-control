import { useMemo, useState } from "react";
import { useBuget } from "../hooks/useBuget";


export default function BudgetForm() {

    const [budget, setBudget] = useState(0);
    const { dispatch } = useBuget();

    const handleOnChange = ( e : React.ChangeEvent<HTMLInputElement> )=> {
        setBudget(e.target.valueAsNumber);
    }

    const isInvalid = useMemo( () => {
        return isNaN(budget) || budget <= 0 || budget === null || budget === undefined
    }, [budget])

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isInvalid) return;
        dispatch({ type: "SET_BUDGET", payload: {budget: budget} });
        
    }

  return (
        <form className="space-y-5 " onSubmit={handleOnSubmit}>
            <div className="flex flex-col space-y-5">
                <label 
                htmlFor="budget" 
                className="text-4xl text-blue-600 font-bold text-center "
                >
                    Definir Presupuesto
                </label>

                <input
                    type="number"
                    name="budget" 
                    id="budget"
                    className="w-full bg-white border border-gray-200 p-2"
                    placeholder="Define tu presupuesto"
                    value={isInvalid ? "" : budget}
                    onChange={handleOnChange}
                    min={0}
                />  
            </div>

            <input
                 type="submit"
                 value={"Agregar Presupuesto"}
                 className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer transition-colors duration-300 uppercase disabled:opacity-50 disbled:cursor-not-allowed"
                 disabled={isInvalid}
             />
        </form> 

    )
}
