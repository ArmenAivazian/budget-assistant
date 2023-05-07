import { useState } from "react";

import { MonthBudgetCalculatorContext } from "@src/contexts";
import { useContextSelector } from "use-context-selector";

import { Grid, Input, Row, Title } from "../";

export const InvestmentRow = () => {
  const [isHelpingArmy, setIsHelpingArmy] = useState(false);
  const [isMonthlyAidToTheArmy, setIsMonthlyAidToTheArmy] = useState(false);

  const investmentPercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentPercent }) => investmentPercent
  );

  const setInvestmentPercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setInvestmentPercent }) => setInvestmentPercent
  );

  return (
    <Row>
      <Title text={`🕛 Investment ${investmentPercent}%`} />
      <Grid>
        <>
          <Input
            name="Interest for investment"
            value={investmentPercent}
            type="range"
            setValue={setInvestmentPercent}
          />

          <Input
            name="Helping the Army"
            type="checkbox"
            value={isHelpingArmy}
            disabled={!+investmentPercent}
            setValue={setIsHelpingArmy}
          />

          <Input
            name="Monthly aid to the Army"
            type="checkbox"
            value={isMonthlyAidToTheArmy}
            disabled={!+investmentPercent || !isHelpingArmy}
            setValue={setIsMonthlyAidToTheArmy}
          />
        </>
      </Grid>
    </Row>
  );
};
