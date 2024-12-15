import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "add-budget", paypload: { budget } });
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label
            className="text-4xl text-blue-600 font-bold text-center"
            htmlFor="budget"
          >
            Definir presupuesto
          </label>
          <input
            className="w-full bg-white border border-gray-200 p-2"
            type="number"
            placeholder="Define tu presupuesto"
            id="budget"
            name="budget"
            value={budget}
            onChange={handleCHange}
          />
        </div>
        <input
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 cursor-pointer font-black uppercase disabled:opacity-40"
          type="submit"
          value={"Definir presupuesto"}
          disabled={isValid}
        />
      </form>
    </>
  );
}
