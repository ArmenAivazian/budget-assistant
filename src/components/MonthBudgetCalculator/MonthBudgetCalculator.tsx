import { Input, Title } from "@src/components";
import { MonthCalcFieldNames } from "@src/constants";
import { convertStrNumToNum } from "@src/utils";

import {
  CalculatorTypes,
  type MonthBudgetCalculatorProps,
} from "./MonthBudgetCalculator.types";

import { PlannedExpensesRow } from "./components/PlannedExpensesRow";

import {
  Column,
  Grid,
  InvestmentRow,
  RangeDatePicker,
  ResultField,
  Row,
} from "./components";
import { useCalculates, useContextData } from "./hooks";

export const MonthBudgetCalculator = ({ type }: MonthBudgetCalculatorProps) => {
  const {
    armenSalary,
    nastiaSalary,
    statisticAmountSpent,
    currentBalance,
    additionalCosts,
    investmentPercent,
    donatePercent,
    statisticPeriod,
    comeBackAliveDonate,
    plannedExpenses,
    rent,
    setArmenSalary,
    setNastiaSalary,
    setStatisticAmountSpent,
    setCurrentBalance,
    setAdditionalCosts,
  } = useContextData();

  const { armenMoney, nastiaMoney, forInvestments, forDonate } = useCalculates(
    armenSalary,
    nastiaSalary,
    statisticAmountSpent,
    currentBalance,
    additionalCosts,
    statisticPeriod,
    investmentPercent,
    donatePercent,
    comeBackAliveDonate,
    plannedExpenses,
    type
  );

  return (
    <div className="md:flex flex-[0_1_100%]">
      <Column>
        <div className="flex-1 overflow-y-auto">
          <Row>
            <Title text="💰 Salaries" />
            <Grid>
              <Input
                name={MonthCalcFieldNames.armenSalary}
                value={armenSalary}
                isNumber
                setValue={setArmenSalary}
              />
              <Input
                name={MonthCalcFieldNames.nastiaSalary}
                value={nastiaSalary}
                isNumber
                setValue={setNastiaSalary}
              />
            </Grid>
          </Row>

          {type === CalculatorTypes.Statistical && (
            <Row>
              <Title text="📈 Statistic" />
              <Grid>
                <RangeDatePicker />
                <Input
                  name={MonthCalcFieldNames.statisticAmountSpent}
                  value={statisticAmountSpent}
                  isNumber
                  setValue={setStatisticAmountSpent}
                />
              </Grid>
            </Row>
          )}

          {type === CalculatorTypes.Fixed && (
            <PlannedExpensesRow plannedExpenses={plannedExpenses} rent={rent} />
          )}

          <InvestmentRow />

          <Row>
            <Title text="🕳 Current Balance" />
            <Grid withoutLabel>
              <Input
                name={MonthCalcFieldNames.currentBalance}
                value={currentBalance}
                setValue={setCurrentBalance}
                isNumber
                withoutLabel
              />
            </Grid>
          </Row>

          <Row>
            <Title text="💸 Additional Costs" />
            <Grid withoutLabel>
              <Input
                name={MonthCalcFieldNames.additionalCosts}
                value={additionalCosts}
                setValue={setAdditionalCosts}
                isNumber
                withoutLabel
              />
            </Grid>
          </Row>
        </div>
      </Column>
      <Column>
        <div className="flex-1 overflow-y-auto ">
          <div className="grid md:grid-cols-[auto_1fr] grid-cols-[auto_1fr_auto_1fr] items-center md:p-6 p-3 gap-2">
            <ResultField text="Investments" value={forInvestments} />
            <ResultField text="Donate" value={forDonate / 2} />
            <ResultField text="Armen" value={armenMoney} />
            <ResultField text="Nastia" value={nastiaMoney} />
            {type === CalculatorTypes.Fixed && (
              <ResultField
                text="Ideal Expenses"
                value={
                  convertStrNumToNum(plannedExpenses) - convertStrNumToNum(rent)
                }
              />
            )}
          </div>
        </div>
      </Column>
    </div>
  );
};
