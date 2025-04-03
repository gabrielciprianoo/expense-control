import { ChangeEvent, useState, FormEvent } from "react";
import { categories } from "../data/categories";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBuget } from "../hooks/useBuget";
import SuccesMessage from "./SuccessMessage";

export default function ExpenseForm() {
  const { dispatch } = useBuget();

  const INITIAL_EXPENSE = {
    amount: 0,
    name: "",
    category: "",
    date: new Date() as Value,
  };

  const [expense, setExpense] = useState<DraftExpense>(INITIAL_EXPENSE);

  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const isValid = () =>
    Object.values(expense).includes("") || expense.amount <= 0;

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid()) {
      setError("Todos los campos son obligatorios");
      return;
    }

    dispatch({ type: "ADD_EXPENSE", payload: { expense: expense } });
    setExpense(INITIAL_EXPENSE);
    setError(undefined);
    setSuccess("Agregado correctamente");
    setTimeout(() => {
      setSuccess(undefined)
    },3000)
  };

  const handleOnChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmount = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmount ? Number(value) : value,
    });
  };

  return (
    <form className="space-y-5" onSubmit={handleOnSubmit}>
      <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-600 py-2">
        nuevo gasto:
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccesMessage>{success}</SuccesMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xl">
          Nombre del gasto:
        </label>

        <input
          type="text"
          id="name"
          placeholder="Ej: Comida, gasolina, etc."
          className="bg-slate-100 p-2"
          name="name"
          value={expense.name}
          onChange={handleOnChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Cantidad:
        </label>

        <input
          type="number"
          id="amount"
          placeholder="Ej: $200, $500, etc."
          className="bg-slate-100 p-2"
          name="amount"
          value={expense.amount || ""}
          onChange={handleOnChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Categoria:
        </label>

        <select
          name="category"
          id="category"
          className="bg-slate-100 p-2 cursor-pointer"
          onChange={handleOnChange}
          value={expense.category}
        >
          <option value="">--Selecciona Una Categoria--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-xl">
          Fecha:
        </label>

        <DatePicker
          className="bg-slate-100 p-2 w-full"
          value={expense.date as string}
          onChange={(date: Value) => handleOnChangeDate(date)}
          selected={expense.date as Date}
        />
      </div>

      <input
        type="submit"
        value="registrar gasto"
        className="bg-blue-600 text-white p-2 rounded-md cursor-pointer hover:bg-blue-700 transition-colors w-full uppercase font-bold"
      />
    </form>
  );
}
