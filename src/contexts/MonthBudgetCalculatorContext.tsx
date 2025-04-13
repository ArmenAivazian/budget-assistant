import { createContext } from "use-context-selector";

interface Type {
  armenSalary: string;
  nastiaSalary: string;
  currentBalance: string;
  additionalCosts: string;
  statisticPeriod: number;
  investmentPercent: string;
  statisticAmountSpent: string;
  donatePercent: string;
  comeBackAliveDonate: string;
  plannedExpenses: string;
  rent: string;
  setArmenSalary: (value: string) => void;
  setNastiaSalary: (value: string) => void;
  setCurrentBalance: (value: string) => void;
  setAdditionalCosts: (value: string) => void;
  setStatisticPeriod: (value: number) => void;
  setInvestmentPercent: (value: string) => void;
  setStatisticAmountSpent: (value: string) => void;
  setDonatePercent: (value: string) => void;
  setComeBackAliveDonate: (value: string) => void;
  setPlannedExpenses: (value: string) => void;
  setRent: (value: string) => void;
}

export const MonthBudgetCalculatorContext = createContext<Type>(null as any);
