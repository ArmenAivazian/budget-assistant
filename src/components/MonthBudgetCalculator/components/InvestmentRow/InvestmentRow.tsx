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
            disabled={!isHelpingArmy || !+investmentPercent}
            setValue={setIsMonthlyAidToTheArmy}
          />

          <Input
            name="A part for the Army"
            value={investmentPartForArmy}
            type="range"
            disabled={!isHelpingArmy || !+investmentPercent || !isHelpingArmy}
            setValue={setInvestmentPartForArmy}
          />

          <Input
            name="Military bonds"
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
            name="Come Back Alive"
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
