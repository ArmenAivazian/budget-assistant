export enum CalculatorTypes {
  Fixed = "fixed",
  Statistical = "statistical",
}

export interface MonthBudgetCalculatorProps {
  type: CalculatorTypes;
}
