import { useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBuget } from "./hooks/useBuget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";

function App() {
  const { state } = useBuget();

  const isValidBuget = useMemo(() => state.budget > 0, [state.budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-3xl px-2 md:px-0 text-white font-black  text-center">
          Control de Gastos
        </h1>
      </header>

      <div className="max-w-3xl mx-auto mt-10 p-10 rounded-lg shadow-lg bg-white">
        {isValidBuget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBuget && (
        <main className="max-w-3xl mx-auto py-10 px-2 md:px-0">
            <ExpenseList/>  
            <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
