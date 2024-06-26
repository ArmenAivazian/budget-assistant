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
  const donatePercentKey = convertStrToHyphenStr(
    MonthCalcFieldNames.donatePercent
  );
  const investmentComBackAliveKey = convertStrToHyphenStr(
    MonthCalcFieldNames.comeBackAliveDonate
  );
  const investmentMilitaryBondsKey = convertStrToHyphenStr(
    MonthCalcFieldNames.militaryBonds
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
  const [donatePercent, setDonatePercent] = useState(
    localStorage.getItem(donatePercentKey) || "0"
  );
  const [comeBackAliveDonate, setComeBackAliveDonate] = useState(
    localStorage.getItem(investmentComBackAliveKey) || ""
  );
  const [militaryBonds, setMilitaryBonds] = useState(
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
    donatePercent,
    comeBackAliveDonate,
    militaryBonds,
    setArmenSalary,
    setNastiaSalary,
    setCurrentBalance,
    setFutureExpenses,
    setStatisticPeriod,
    setInvestmentPercent,
    setStatisticAmountSpent,
    setDonatePercent,
    setComeBackAliveDonate,
    setMilitaryBonds,
  };

  return (
    <MonthBudgetCalculatorContext.Provider value={monthBudgetCalculatorValue}>
      {children}
    </MonthBudgetCalculatorContext.Provider>
  );
}
