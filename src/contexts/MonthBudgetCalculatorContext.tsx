import { createContext } from "use-context-selector";

interface Type {
  armenSalary: string;
  nastiaSalary: string;
  statisticPeriod: number;
  investmentPercent: string;
  statisticAmountSpent: string;
  setArmenSalary: (value: string) => void;
  setNastiaSalary: (value: string) => void;
  setStatisticPeriod: (value: number) => void;
  setInvestmentPercent: (value: string) => void;
  setStatisticAmountSpent: (value: string) => void;
}

export const MonthBudgetCalculatorContext = createContext<Type>(null as any);
