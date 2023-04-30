import {
  Column,
  Grid,
  RangeDatePicker,
  Row,
  TextInput,
  Title,
} from "./components";

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
        <Row>
          <Title text="📈 Statistic" />
          <Grid>
            <RangeDatePicker />
            <TextInput name="Amount spent during this period" />
          </Grid>
        </Row>
      </Column>
    </div>
  );
};
