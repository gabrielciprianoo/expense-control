import AmountDisplay from "./AmountDisplay";
import { useBuget } from "../hooks/useBuget";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function BudgetTracker() {
    const { state, dispatch,  totalExpenses, remainningBudget } = useBuget();
    const percentage = ((totalExpenses / state.budget) * 100).toFixed(2);
    const progressBarColor = +percentage === 100 ? '#dc2626' : '#3b82f6';
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-5">

        <div className="flex justify-center">
            <CircularProgressbar
                value={+percentage}
                styles={buildStyles({
                    pathColor: progressBarColor,
                    trailColor: '#f5f5f5',
                    textColor: progressBarColor,
                    textSize: 8
                })}
                text={`${percentage}% Gastado`}
            />
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
            <button 
                type="button"
                className=" bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg cursor-pointer hover:bg-pink-800 transition-colors duration-300"
                onClick={() => {
                    dispatch({type: "RESET_APP"})
                }}
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
