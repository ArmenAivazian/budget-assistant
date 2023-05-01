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
  return (
    <div className="md:flex flex-[0_1_100%]">
      <Column>
        <Row>
          <Title text="💰 Salaries" />
          <Grid>
            <Input name="Armen's salary" />
            <Input name="Nastia's salary" />
          </Grid>
        </Row>
        <Row>
          <Title text="📈 Statistic" />
          <Grid>
            <RangeDatePicker />
            <Input name="Amount spent during this period" />
          </Grid>
        </Row>
        <InvestmentRow />
      </Column>
    </div>
  );
};
