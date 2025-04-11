import AmountDisplay from "./AmountDisplay";
import { useBuget } from "../hooks/useBuget";


export default function BudgetTracker() {
    const { state, totalExpenses, remainningBudget } = useBuget();
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-5">

        <div className="flex justify-center">
            <img src="/grafico.jpg" alt="Grafica de gastos" />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button 
                type="button"
                className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer hover:bg-pink-800 transition-colors duration-300"
            >
                Restablecer Presupuesto
            </button>

            <AmountDisplay
                label = {"Presupuesto"}
                amount = {state.budget}
            />
            <AmountDisplay
                label = {"Disponible"}
                amount = {remainningBudget}
            />
            <AmountDisplay
                label = {"Gastado"}
                amount = {totalExpenses}
            />

        </div>
    </div>
  )
}
