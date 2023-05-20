import { MonthBudgetCalculatorContext } from "@src/contexts";
import { useContextSelector } from "use-context-selector";

import {
  Column,
  Grid,
  Input,
  InvestmentRow,
  RangeDatePicker,
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
        <div className="flex-1 overflow-y-auto"></div>

        <div className="border-t border-gray-800 px-4 py-3 sm:px-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3  text-lg font-bold text-white shadow-sm hover:rounded-none"
          >
            Save
          </a>
        </div>
      </Column>
    </div>
  );
};
