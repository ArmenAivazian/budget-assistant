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

  return (
    <div className="md:flex flex-[0_1_100%]">
      <Column>
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
      </Column>
    </div>
  );
};
