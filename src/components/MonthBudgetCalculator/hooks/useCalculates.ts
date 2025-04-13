import { convertStrNumToNum } from "@src/utils";

import { CalculatorTypes } from "../MonthBudgetCalculator.types";

import { getExpensesPerPeriod } from "../utils";

import { useConsoleInfo } from "./useConsoleInfo";

export function useCalculates(
  armenSalaryStr: string,
  nastiaSalaryStr: string,
  statisticAmountSpentStr: string,
  currentBalanceStr: string,
  additionalCostsStr: string,
  statisticPeriod: number,
  investmentPercentStr: string,
  donatePercentStr: string,
  comeBackAliveDonateStr: string,
  plannedExpensesStr: string,
  calculateType: CalculatorTypes
) {
  const armenSalary = convertStrNumToNum(armenSalaryStr);
  const nastiaSalary = convertStrNumToNum(nastiaSalaryStr);
  const statisticAmountSpent = convertStrNumToNum(statisticAmountSpentStr);
  const currentBalance = convertStrNumToNum(currentBalanceStr);
  const additionalCosts = convertStrNumToNum(additionalCostsStr);
  const investmentPercent = convertStrNumToNum(investmentPercentStr);
  const donatePercent = convertStrNumToNum(donatePercentStr);
  const comeBackAliveDonate = convertStrNumToNum(comeBackAliveDonateStr);
  const plannedExpenses = convertStrNumToNum(plannedExpensesStr);

  const daysInMonth = 31;
  const sumSalaries = armenSalary + nastiaSalary;
  const initExpenses = additionalCosts + comeBackAliveDonate - currentBalance;

  const { expensesPerDay, expensesPerMonth } = getExpensesPerPeriod(
    calculateType,
    statisticAmountSpent,
    statisticPeriod,
    daysInMonth,
    initExpenses,
    plannedExpenses
  );

  const forInvestments = sumSalaries * (investmentPercent / 100);
  const forDonate = sumSalaries * (donatePercent / 100);

  const allExpenses = expensesPerMonth + forInvestments + forDonate;

  const armenPartOfExpenses = armenSalary / sumSalaries;
  const nastiaPartOfExpenses = nastiaSalary / sumSalaries;

  const armenMoney = armenSalary - allExpenses * armenPartOfExpenses;
  const nastiaMoney = nastiaSalary - allExpenses * nastiaPartOfExpenses;

  useConsoleInfo(
    armenPartOfExpenses,
    nastiaPartOfExpenses,
    expensesPerDay,
    expensesPerMonth,
    forInvestments,
    forDonate,
    allExpenses
  );

  return { armenMoney, nastiaMoney, forInvestments, forDonate };
}
