import { useState } from "react";

import { MonthCalcFieldNames } from "@src/constants";
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

  const investmentPartForArmy = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentPartForArmy }) => investmentPartForArmy
  );

  const setInvestmentPartForArmy = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setInvestmentPartForArmy }) => setInvestmentPartForArmy
  );
  const investmentMilitaryBonds = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentMilitaryBonds }) => investmentMilitaryBonds
  );

  const setInvestmentMilitaryBonds = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setInvestmentMilitaryBonds }) => setInvestmentMilitaryBonds
  );
  const investmentComBackAlive = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentComBackAlive }) => investmentComBackAlive
  );

  const setInvestmentComBackAlive = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setInvestmentComBackAlive }) => setInvestmentComBackAlive
  );

  return (
    <Row>
      <Title text={`🕛 Investment`} />
      <Grid>
        <>
          <Input
            name={MonthCalcFieldNames.investmentPercent}
            value={investmentPercent}
            type="range"
            setValue={setInvestmentPercent}
          />

          <Input
            name={MonthCalcFieldNames.isHelpingArmy}
            type="checkbox"
            value={isHelpingArmy}
            disabled={!+investmentPercent}
            setValue={setIsHelpingArmy}
          />

          <Input
            name={MonthCalcFieldNames.isMonthlyAidToTheArmy}
            type="checkbox"
            value={isMonthlyAidToTheArmy}
            disabled={!isHelpingArmy || !+investmentPercent}
            setValue={setIsMonthlyAidToTheArmy}
          />

          <Input
            name={MonthCalcFieldNames.investmentPartForArmy}
            value={investmentPartForArmy}
            type="range"
            disabled={!isHelpingArmy || !+investmentPercent || !isHelpingArmy}
            setValue={setInvestmentPartForArmy}
          />

          <Input
            name={MonthCalcFieldNames.investmentMilitaryBonds}
            value={investmentMilitaryBonds}
            isNumber
            disabled={
              !isMonthlyAidToTheArmy ||
              !+investmentPercent ||
              !isHelpingArmy ||
              !+investmentPartForArmy
            }
            setValue={setInvestmentMilitaryBonds}
          />

          <Input
            name={MonthCalcFieldNames.investmentComBackAlive}
            value={investmentComBackAlive}
            isNumber
            disabled={
              !isMonthlyAidToTheArmy ||
              !+investmentPercent ||
              !isHelpingArmy ||
              !+investmentPartForArmy
            }
            setValue={setInvestmentComBackAlive}
          />
        </>
      </Grid>
    </Row>
  );
};
