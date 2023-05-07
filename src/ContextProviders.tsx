import { useState } from "react";

import { MonthBudgetCalculatorContext } from "@src/contexts";

export function ContextProviders({ children }: { children: JSX.Element }) {
  const [armenSalary, setArmenSalary] = useState("");
  const [nastiaSalary, setNastiaSalary] = useState("");
  const [statisticPeriod, setStatisticPeriod] = useState(0);
  const [investmentPercent, setInvestmentPercent] = useState("0");
  const [statisticAmountSpent, setStatisticAmountSpent] = useState("");

  const monthBudgetCalculatorValue = {
    armenSalary,
    nastiaSalary,
    statisticPeriod,
    investmentPercent,
    statisticAmountSpent,
    setArmenSalary,
    setNastiaSalary,
    setStatisticPeriod,
    setInvestmentPercent,
    setStatisticAmountSpent,
  };

  return (
    <MonthBudgetCalculatorContext.Provider value={monthBudgetCalculatorValue}>
      {children}
    </MonthBudgetCalculatorContext.Provider>
  );
}
