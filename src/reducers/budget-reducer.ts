import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense } from "../types";

export type BudgetActions =
  | {
      type: "add-budget";
      paypload: { budget: number };
    }
  | { type: "show-modal" }
  | { type: "close-modal" }
  | { type: "add-expense"; payload: { expense: DraftExpense } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
};

export const initialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
};

const createExpense = (drafExpense: DraftExpense): Expense => {
  return {
    ...drafExpense,
    id: uuidv4(),
  };
};

export const budgetReducer = (state: BudgetState, action: BudgetActions) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.paypload.budget,
    };
  }
  if (action.type === "show-modal") {
    return {
      ...state,
      modal: true,
    };
  }
  if (action.type === "close-modal") {
    return {
      ...state,
      modal: false,
    };
  }
  if (action.type === "add-expense") {
    const expense = createExpense(action.payload.expense);

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }
  return state;
};
