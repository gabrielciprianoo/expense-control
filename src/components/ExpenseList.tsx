import { useMemo } from "react";
import { useBuget } from "../hooks/useBuget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBuget();
  const { expenses } = state;

  const isEmpty = useMemo(() => expenses.length === 0, [expenses]);

  return (
    <div className="mt-10 ">
      {isEmpty ? (
        <p className="text-gray-700 text-2xl text-center font-bold capitalize ">
          no hay ningun gasto
        </p>
      ) : (
        <>
          <p className="text-gray-700 text-2xl font-bold capitalize ">listado de gastos</p>

          {
            expenses.map( expense => (
                <ExpenseDetail
                    key={expense.id}
                    expense={expense}
                />
            ))
          }
        </>
      )}
    </div>
  );
}
