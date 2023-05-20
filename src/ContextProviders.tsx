import { useState } from "react";

import { MonthBudgetCalculatorContext } from "@src/contexts";

export function ContextProviders({ children }: { children: JSX.Element }) {
  const [armenSalary, setArmenSalary] = useState("");
  const [nastiaSalary, setNastiaSalary] = useState("");
  const [futureExpenses, setFutureExpenses] = useState("");
  const [statisticPeriod, setStatisticPeriod] = useState(0);
  const [investmentPercent, setInvestmentPercent] = useState("0");
  const [statisticAmountSpent, setStatisticAmountSpent] = useState("");
  const [investmentPartForArmy, setInvestmentPartForArmy] = useState("0");
  const [investmentComBackAlive, setInvestmentComBackAlive] = useState("");
  const [investmentMilitaryBonds, setInvestmentMilitaryBonds] = useState("");

  const monthBudgetCalculatorValue = {
    armenSalary,
    nastiaSalary,
    futureExpenses,
    statisticPeriod,
    investmentPercent,
    statisticAmountSpent,
    investmentPartForArmy,
    investmentComBackAlive,
    investmentMilitaryBonds,
    setArmenSalary,
    setNastiaSalary,
    setFutureExpenses,
    setStatisticPeriod,
    setInvestmentPercent,
    setStatisticAmountSpent,
    setInvestmentPartForArmy,
    setInvestmentComBackAlive,
    setInvestmentMilitaryBonds,
  };

  return (
    <MonthBudgetCalculatorContext.Provider value={monthBudgetCalculatorValue}>
      {children}
    </MonthBudgetCalculatorContext.Provider>
  );
}
