import { MonthCalcFieldNames } from "@src/constants";
import { MonthBudgetCalculatorContext } from "@src/contexts";
import { useContextSelector } from "use-context-selector";

import { Grid, Input, Row, Title } from "../";

export const InvestmentRow = () => {
  const investmentPercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentPercent }) => investmentPercent
  );

  const setInvestmentPercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setInvestmentPercent }) => setInvestmentPercent
  );

  const donatePercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ donatePercent }) => donatePercent
  );

  const setDonatePercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setDonatePercent }) => setDonatePercent
  );

  const comeBackAliveDonate = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ comeBackAliveDonate }) => comeBackAliveDonate
  );

  const setComeBackAliveDonate = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setComeBackAliveDonate }) => setComeBackAliveDonate
  );

  return (
    <Row>
      <Title text={`🕛 Investment`} />
      <Grid>
        <Input
          name={MonthCalcFieldNames.investmentPercent}
          value={investmentPercent}
          type="range"
          setValue={setInvestmentPercent}
        />

        <Input
          name={MonthCalcFieldNames.donatePercent}
          value={donatePercent}
          type="range"
          setValue={setDonatePercent}
        />

        <Input
          name={MonthCalcFieldNames.comeBackAliveDonate}
          value={comeBackAliveDonate}
          isNumber
          setValue={setComeBackAliveDonate}
        />
      </Grid>
    </Row>
  );
};
