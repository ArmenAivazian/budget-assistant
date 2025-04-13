import { CalculatorTypes } from "../MonthBudgetCalculator.types";

export function getExpensesPerPeriod(
  type: CalculatorTypes,
  statisticAmountSpent: number,
  statisticPeriod: number,
  daysInMonth: number,
  initExpenses: number,
  plannedExpenses: number
) {
  if (type === CalculatorTypes.Statistical) {
    const expensesPerDay = statisticAmountSpent / statisticPeriod;

    return {
      expensesPerDay,
      expensesPerMonth: expensesPerDay * daysInMonth + initExpenses,
    };
  }

  return {
    expensesPerDay: plannedExpenses / daysInMonth,
    expensesPerMonth: plannedExpenses + initExpenses,
  };
}
