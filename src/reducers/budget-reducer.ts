export type BudgetActions = {
  type: "add-budget";
  paypload: { budget: number };
};

export type BudgetState = {
  budget: number;
};

export const initialSatet: BudgetState = {
  budget: 0,
};

export const BudgetReducer = (state: BudgetState, action: BudgetActions) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.paypload.budget,
    };
  }
  return state;
};
