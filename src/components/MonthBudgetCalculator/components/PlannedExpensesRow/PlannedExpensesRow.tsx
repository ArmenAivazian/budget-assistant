import { MonthCalcFieldNames } from "@src/constants";
import { MonthBudgetCalculatorContext } from "@src/contexts";
import { useContextSelector } from "use-context-selector";

import type { PlannedExpensesRowProps } from "./PlannedExpensesRow.types";

import { Grid, Input, Row, Title } from "..";

export function PlannedExpensesRow({
  plannedExpenses,
  rent,
}: PlannedExpensesRowProps) {
  const setPlannedExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setPlannedExpenses }) => setPlannedExpenses
  );

  const setRent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setRent }) => setRent
  );

  return (
    <Row>
      <Title text="✉️ Planned Expenses" />
      <Grid>
        <Input
          name={MonthCalcFieldNames.plannedExpenses}
          value={plannedExpenses}
          setValue={setPlannedExpenses}
          isNumber
        />
        <Input
          name={MonthCalcFieldNames.rent}
          value={rent}
          setValue={setRent}
          isNumber
        />
      </Grid>
    </Row>
  );
}
