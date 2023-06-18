import { useState } from "react";

import { MonthBudgetCalculatorContext } from "@src/contexts";

import {
  MONTH_CALC_DATE_DEFAULT_END,
  MONTH_CALC_DATE_DEFAULT_START,
  MonthCalcFieldNames,
} from "./constants";
import { convertStringToHyphenString, getAmountDays } from "./utils";

export function ContextProviders({ children }: { children: JSX.Element }) {
  const armenSalaryKey = convertStringToHyphenString(
    MonthCalcFieldNames.armenSalary
  );
  const nastiaSalaryKey = convertStringToHyphenString(
    MonthCalcFieldNames.nastiaSalary
  );
  const futureExpensesKey = convertStringToHyphenString(
    MonthCalcFieldNames.futureExpenses
  );
  const investmentPercentKey = convertStringToHyphenString(
    MonthCalcFieldNames.investmentPercent
  );
  const statisticAmountSpentKey = convertStringToHyphenString(
    MonthCalcFieldNames.statisticAmountSpent
  );
  const investmentPartForArmyKey = convertStringToHyphenString(
    MonthCalcFieldNames.investmentPartForArmy
  );
  const investmentComBackAliveKey = convertStringToHyphenString(
    MonthCalcFieldNames.investmentComBackAlive
  );
  const investmentMilitaryBondsKey = convertStringToHyphenString(
    MonthCalcFieldNames.investmentMilitaryBonds
  );

  const [statisticPeriod, setStatisticPeriod] = useState(
    getAmountDays(MONTH_CALC_DATE_DEFAULT_START, MONTH_CALC_DATE_DEFAULT_END)
  );
  const [armenSalary, setArmenSalary] = useState(
    localStorage.getItem(armenSalaryKey) || ""
  );
  const [nastiaSalary, setNastiaSalary] = useState(
    localStorage.getItem(nastiaSalaryKey) || ""
  );
  const [futureExpenses, setFutureExpenses] = useState(
    localStorage.getItem(futureExpensesKey) || ""
  );
  const [investmentPercent, setInvestmentPercent] = useState(
    localStorage.getItem(investmentPercentKey) || "0"
  );
  const [statisticAmountSpent, setStatisticAmountSpent] = useState(
    localStorage.getItem(statisticAmountSpentKey) || ""
  );
  const [investmentPartForArmy, setInvestmentPartForArmy] = useState(
    localStorage.getItem(investmentPartForArmyKey) || "0"
  );
  const [investmentComBackAlive, setInvestmentComBackAlive] = useState(
    localStorage.getItem(investmentComBackAliveKey) || ""
  );
  const [investmentMilitaryBonds, setInvestmentMilitaryBonds] = useState(
    localStorage.getItem(investmentMilitaryBondsKey) || ""
  );

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
