import { useMemo, useState } from "react";

export default function BudgetForm() {

    const [budget, setBudget] = useState(0);

    const handleOnChange = ( e : React.ChangeEvent<HTMLInputElement> )=> {
        setBudget(e.target.valueAsNumber);
    }

    const isValid = useMemo( () => {
        return isNaN(budget) || budget <= 0 || budget === null || budget === undefined
    }, [budget])

  return (
        <form className="space-y-5 ">
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
                    value={isValid ? "" : budget}
                    onChange={handleOnChange}
                    min={0}
                />  
            </div>

            <input
                 type="submit"
                 value={"Agregar Presupuesto"}
                 className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 cursor-pointer transition-colors duration-300 uppercase disabled:opacity-50 disbled:cursor-not-allowed"
                 disabled={isValid}
             />
        </form> 

    )
}
