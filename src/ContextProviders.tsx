import { useState } from "react";

import { MonthBudgetCalculatorContext } from "@src/contexts";

import {
  MONTH_CALC_DATE_DEFAULT_END,
  MONTH_CALC_DATE_DEFAULT_START,
  MonthCalcFieldNames,
} from "./constants";
import { convertStrToHyphenStr, getAmountDays } from "./utils";

export function ContextProviders({ children }: { children: JSX.Element }) {
  const armenSalaryKey = convertStrToHyphenStr(MonthCalcFieldNames.armenSalary);
  const nastiaSalaryKey = convertStrToHyphenStr(
    MonthCalcFieldNames.nastiaSalary
  );
  const currentBalanceKey = convertStrToHyphenStr(
    MonthCalcFieldNames.currentBalance
  );
  const futureExpensesKey = convertStrToHyphenStr(
    MonthCalcFieldNames.futureExpenses
  );
  const investmentPercentKey = convertStrToHyphenStr(
    MonthCalcFieldNames.investmentPercent
  );
  const statisticAmountSpentKey = convertStrToHyphenStr(
    MonthCalcFieldNames.statisticAmountSpent
  );
  const investmentPartForArmyKey = convertStrToHyphenStr(
    MonthCalcFieldNames.investmentPartForArmy
  );
  const investmentComBackAliveKey = convertStrToHyphenStr(
    MonthCalcFieldNames.investmentComBackAlive
  );
  const investmentMilitaryBondsKey = convertStrToHyphenStr(
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
  const [currentBalance, setCurrentBalance] = useState(
    localStorage.getItem(currentBalanceKey) || ""
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
    currentBalance,
    futureExpenses,
    statisticPeriod,
    investmentPercent,
    statisticAmountSpent,
    investmentPartForArmy,
    investmentComBackAlive,
    investmentMilitaryBonds,
    setArmenSalary,
    setNastiaSalary,
    setCurrentBalance,
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
