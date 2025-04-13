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

  const additionalCosts = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ additionalCosts }) => additionalCosts
  );

  const plannedExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ plannedExpenses }) => plannedExpenses
  );

  const setPlannedExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setPlannedExpenses }) => setPlannedExpenses
  );

  const rent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ rent }) => rent
  );

  const setRent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setRent }) => setRent
  );

  const setCurrentBalance = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setCurrentBalance }) => setCurrentBalance
  );

  const setAdditionalCosts = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setAdditionalCosts }) => setAdditionalCosts
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
    additionalCosts,
    setAdditionalCosts,
    plannedExpenses,
    setPlannedExpenses,
    rent,
    setRent,
    statisticPeriod,
    investmentPercent,
    donatePercent,
    comeBackAliveDonate,
  };
}
