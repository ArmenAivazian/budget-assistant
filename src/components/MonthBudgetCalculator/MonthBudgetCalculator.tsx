import { Column, Grid, Row, TextInput, Title } from "./components";

export const MonthBudgetCalculator = () => {
  return (
    <div className="md:flex flex-[0_1_100%]">
      <Column>
        <Row>
          <Title text="💰 Salaries" />
          <Grid>
            <TextInput name="Armen's salary" />
            <TextInput name="Nastia's salary" />
          </Grid>
        </Row>
      </Column>
    </div>
  );
};
