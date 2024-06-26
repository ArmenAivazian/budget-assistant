import { convertStrNumToNum } from "@src/utils";

import { useConsoleInfo } from "./useConsoleInfo";

export function useCalculates(
  armenSalaryStr: string,
  nastiaSalaryStr: string,
  statisticAmountSpentStr: string,
  currentBalanceStr: string,
  futureExpensesStr: string,
  statisticPeriod: number,
  investmentPercentStr: string,
  donatePercentStr: string,
  comeBackAliveDonateStr: string,
  militaryBondsStr: string
) {
  const armenSalary = convertStrNumToNum(armenSalaryStr);
  const nastiaSalary = convertStrNumToNum(nastiaSalaryStr);
  const statisticAmountSpent = convertStrNumToNum(statisticAmountSpentStr);
  const currentBalance = convertStrNumToNum(currentBalanceStr);
  const futureExpenses = convertStrNumToNum(futureExpensesStr);
  const investmentPercent = convertStrNumToNum(investmentPercentStr);
  const donatePercent = convertStrNumToNum(donatePercentStr);
  const comeBackAliveDonate = convertStrNumToNum(comeBackAliveDonateStr);
  const militaryBonds = convertStrNumToNum(militaryBondsStr);

  const daysInMonth = 31;
  const sumSalaries = armenSalary + nastiaSalary;
  const initExpenses = futureExpenses - currentBalance;

  const armenPartOfExpenses = armenSalary / sumSalaries;
  const nastiaPartOfExpenses = nastiaSalary / sumSalaries;

  const expensesPerDay = statisticAmountSpent / statisticPeriod;
  const expensesPerMonth = expensesPerDay * daysInMonth + initExpenses;

  const forInvestments = sumSalaries * (investmentPercent / 100);
  const forArmy = sumSalaries * (donatePercent / 100);
  const forDonate = forArmy - comeBackAliveDonate - militaryBonds;

  const allExpenses = expensesPerMonth + forInvestments + forArmy;

  const armenMoney = armenSalary - allExpenses * armenPartOfExpenses;
  const nastiaMoney = nastiaSalary - allExpenses * nastiaPartOfExpenses;

  useConsoleInfo(
    armenPartOfExpenses,
    nastiaPartOfExpenses,
    expensesPerDay,
    expensesPerMonth,
    forInvestments,
    forArmy,
    allExpenses
  );

  return { armenMoney, nastiaMoney, forInvestments, forDonate };
}
