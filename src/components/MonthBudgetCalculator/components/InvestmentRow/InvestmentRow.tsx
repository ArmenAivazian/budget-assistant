import { useState } from "react";

import { Grid, Input, Row, Title } from "../";

export const InvestmentRow = () => {
  const [investmentValue, setInvestmentValue] = useState<string | boolean>("0");
  const [isHelpingArmy, setIsHelpingArmy] = useState<string | boolean>(false);

  return (
    <Row>
      <Title text={`🕛 Investment ${investmentValue}%`} />
      <Grid>
        <Input
          name="Interest for investment"
          type="range"
          setValue={setInvestmentValue}
        />
        {+investmentValue ? (
          <Input
            name="Helping the Army"
            type="checkbox"
            setValue={setIsHelpingArmy}
          />
        ) : (
          <></>
        )}
        {isHelpingArmy && +investmentValue ? (
          <Input name="Monthly aid to the Army" type="checkbox" />
        ) : (
          <></>
        )}
      </Grid>
    </Row>
  );
};
