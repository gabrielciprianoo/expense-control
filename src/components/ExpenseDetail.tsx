import { useMemo } from "react";
import type { Expense } from "../types";
import { formatDate } from "../utils";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";

type ExpenseDetailProps = {
  expense: Expense;
};

export default function ExpenseDetail({ expense }: ExpenseDetailProps) {
  const { name, amount, category, date } = expense;

  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id == category)[0],
    [category]
  );

  const { name: categoryName, icon } = categoryInfo;

  return (
    <div className="bg-white shadow-lg p-10 border-b border-gray-200 mt-4 flex items-center gap-5">
      <div>
        <img
          src={`/icono_${icon}.svg`}
          alt="Icono Categoria"
          className="w-20"
        />
      </div>

      <div className="flex-1">
        <p className="text-sm font-bold uppercase text-slate-500">
          {categoryName}
        </p>
        <p className="capitalize">{name}</p>
        <p className="text-slate-600 text-sm mt-1 capitalize">
          {formatDate(date!.toString())}
        </p>
      </div>
      <AmountDisplay amount={amount} />
    </div>
  );
}
