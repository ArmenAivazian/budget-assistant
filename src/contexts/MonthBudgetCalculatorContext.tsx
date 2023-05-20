import { createContext } from "use-context-selector";

interface Type {
  armenSalary: string;
  nastiaSalary: string;
  futureExpenses: string;
  statisticPeriod: number;
  investmentPercent: string;
  statisticAmountSpent: string;
  investmentPartForArmy: string;
  investmentComBackAlive: string;
  investmentMilitaryBonds: string;
  setArmenSalary: (value: string) => void;
  setNastiaSalary: (value: string) => void;
  setFutureExpenses: (value: string) => void;
  setStatisticPeriod: (value: number) => void;
  setInvestmentPercent: (value: string) => void;
  setStatisticAmountSpent: (value: string) => void;
  setInvestmentPartForArmy: (value: string) => void;
  setInvestmentComBackAlive: (value: string) => void;
  setInvestmentMilitaryBonds: (value: string) => void;
}

export const MonthBudgetCalculatorContext = createContext<Type>(null as any);
