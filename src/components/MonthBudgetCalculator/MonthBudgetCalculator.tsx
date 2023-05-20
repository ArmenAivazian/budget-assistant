import { MonthBudgetCalculatorContext } from "@src/contexts";
import { useContextSelector } from "use-context-selector";

import {
  Column,
  Grid,
  Input,
  InvestmentRow,
  RangeDatePicker,
  ResultField,
  Row,
  Title,
} from "./components";

export const MonthBudgetCalculator = () => {
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

  const futureExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ futureExpenses }) => futureExpenses
  );

  const setFutureExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setFutureExpenses }) => setFutureExpenses
  );

  return (
    <div className="md:flex flex-[0_1_100%]">
      <Column>
        <div className="flex-1 overflow-y-auto">
          <Row>
            <Title text="💰 Salaries" />
            <Grid>
              <Input
                name="Armen's salary"
                value={armenSalary}
                isNumber
                setValue={setArmenSalary}
              />
              <Input
                name="Nastia's salary"
                value={nastiaSalary}
                isNumber
                setValue={setNastiaSalary}
              />
            </Grid>
          </Row>
          <Row>
            <Title text="📈 Statistic" />
            <Grid>
              <RangeDatePicker />
              <Input
                name="Amount spent during this period"
                value={statisticAmountSpent}
                isNumber
                setValue={setStatisticAmountSpent}
              />
            </Grid>
          </Row>
          <InvestmentRow />
          <Row>
            <Title text="💸 Future Expenses" />
            <Grid>
              <Input
                name="100% expense"
                value={futureExpenses}
                isNumber
                setValue={setFutureExpenses}
              />
            </Grid>
          </Row>
        </div>
      </Column>
      <Column>
        <div className="flex-1 overflow-y-auto ">
          <div className="grid md:grid-cols-[auto_1fr] grid-cols-[auto_1fr_auto_1fr] items-center md:p-6 p-3 gap-2">
            <ResultField text="For Investments" value="0" />
            <ResultField text="For Army" value="0" />
            <ResultField text="For Armen" value="0" />
            <ResultField text="For Nastia" value="0" />
          </div>
        </div>
      </Column>
    </div>
  );
};
