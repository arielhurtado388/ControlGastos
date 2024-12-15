export type BudgetActions = {
  type: "add-budget";
  paypload: { budget: number };
};

export type BudgetState = {
  budget: number;
};

export const initialState: BudgetState = {
  budget: 0,
};

export const budgetReducer = (state: BudgetState, action: BudgetActions) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.paypload.budget,
    };
  }
  return state;
};
