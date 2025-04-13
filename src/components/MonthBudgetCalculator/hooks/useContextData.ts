import { MonthBudgetCalculatorContext } from "@src/contexts";
import { useContextSelector } from "use-context-selector";

export function useContextData() {
  const armenSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ armenSalary }) => armenSalary
  );
  const setArmenSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setArmenSalary }) => setArmenSalary
  );

  const nastiaSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ nastiaSalary }) => nastiaSalary
  );
  const setNastiaSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setNastiaSalary }) => setNastiaSalary
  );

  const statisticAmountSpent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ statisticAmountSpent }) => statisticAmountSpent
  );

  const setStatisticAmountSpent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setStatisticAmountSpent }) => setStatisticAmountSpent
  );

  const currentBalance = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ currentBalance }) => currentBalance
  );

  const futureExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ futureExpenses }) => futureExpenses
  );

  const setCurrentBalance = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setCurrentBalance }) => setCurrentBalance
  );

  const setFutureExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setFutureExpenses }) => setFutureExpenses
  );

  const statisticPeriod = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ statisticPeriod }) => statisticPeriod
  );

  const investmentPercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentPercent }) => investmentPercent
  );

  const donatePercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ donatePercent }) => donatePercent
  );

  const comeBackAliveDonate = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ comeBackAliveDonate }) => comeBackAliveDonate
  );

  return {
    armenSalary,
    setArmenSalary,
    nastiaSalary,
    setNastiaSalary,
    statisticAmountSpent,
    setStatisticAmountSpent,
    currentBalance,
    setCurrentBalance,
    futureExpenses,
    setFutureExpenses,
    statisticPeriod,
    investmentPercent,
    donatePercent,
    comeBackAliveDonate,
  };
}
