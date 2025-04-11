import { categories } from "../data/categories";
import { useBuget } from "../hooks/useBuget";
export default function FilterByCategory() {

    const { dispatch } = useBuget();
const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: "FIlTER_EXPENSES", payload: { category: e.target.value }});
}
  return (
    <div className=" shadow-lg bg-white p-10 10 rounded-lg">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category" className="capitalize">
            filtrar por categoria
          </label>
          <select
            id="category"
            className="bg-slate-100 p-3 flex-1 rounded"
            onChange={handleOnChange}
           >
            <option value="">-- Todas Las Categorias --</option>
            {categories.map((category) => (
              <option key={category.name} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
