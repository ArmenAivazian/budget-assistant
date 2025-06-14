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
  const additionalCostsKey = convertStrToHyphenStr(
    MonthCalcFieldNames.additionalCosts
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
  const plannedExpensesKey = convertStrToHyphenStr(
    MonthCalcFieldNames.plannedExpenses
  );
  const RentKey = convertStrToHyphenStr(MonthCalcFieldNames.rent);

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
  const [additionalCosts, setAdditionalCosts] = useState(
    localStorage.getItem(additionalCostsKey) || ""
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
  const [plannedExpenses, setPlannedExpenses] = useState(
    localStorage.getItem(plannedExpensesKey) || ""
  );
  const [rent, setRent] = useState(localStorage.getItem(RentKey) || "");

  const monthBudgetCalculatorValue = {
    armenSalary,
    nastiaSalary,
    currentBalance,
    additionalCosts,
    statisticPeriod,
    investmentPercent,
    statisticAmountSpent,
    donatePercent,
    comeBackAliveDonate,
    plannedExpenses,
    rent,
    setArmenSalary,
    setNastiaSalary,
    setCurrentBalance,
    setAdditionalCosts,
    setStatisticPeriod,
    setInvestmentPercent,
    setStatisticAmountSpent,
    setDonatePercent,
    setComeBackAliveDonate,
    setPlannedExpenses,
    setRent,
  };

  return (
    <MonthBudgetCalculatorContext.Provider value={monthBudgetCalculatorValue}>
      {children}
    </MonthBudgetCalculatorContext.Provider>
  );
}
