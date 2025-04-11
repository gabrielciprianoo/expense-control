import { useMemo } from "react";
import { useBuget } from "../hooks/useBuget";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList() {
  const { state } = useBuget();
  const { expenses } = state;

  const filterdExpenses = state.expenses.filter( expense => expense.category === state.filterId);
  const expensesToShow = state.filterId ? filterdExpenses : expenses;
  const isEmpty = useMemo(() => expensesToShow.length === 0, [expensesToShow.length]);
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
            expensesToShow.map( expense => (
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
