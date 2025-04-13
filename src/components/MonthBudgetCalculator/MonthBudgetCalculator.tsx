import { Input, Title } from "@src/components";
import { MonthCalcFieldNames } from "@src/constants";

import {
  Column,
  Grid,
  InvestmentRow,
  RangeDatePicker,
  ResultField,
  Row,
} from "./components";
import { useCalculates, useContextData } from "./hooks";

export const MonthBudgetCalculator = () => {
  const {
    armenSalary,
    setArmenSalary,
    nastiaSalary,
    setNastiaSalary,
    statisticAmountSpent,
    setStatisticAmountSpent,
    currentBalance,
    setCurrentBalance,
    futureExpenses,
    setFutureExpenses,
    investmentPercent,
    donatePercent,
    statisticPeriod,
    comeBackAliveDonate,
  } = useContextData();

  const { armenMoney, nastiaMoney, forInvestments, forDonate } = useCalculates(
    armenSalary,
    nastiaSalary,
    statisticAmountSpent,
    currentBalance,
    futureExpenses,
    statisticPeriod,
    investmentPercent,
    donatePercent,
    comeBackAliveDonate
  );

  return (
    <div className="md:flex flex-[0_1_100%]">
      <Column>
        <div className="flex-1 overflow-y-auto">
          <Row>
            <Title text="💰 Salaries" />
            <Grid>
              <Input
                name={MonthCalcFieldNames.armenSalary}
                value={armenSalary}
                isNumber
                setValue={setArmenSalary}
              />
              <Input
                name={MonthCalcFieldNames.nastiaSalary}
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
                name={MonthCalcFieldNames.statisticAmountSpent}
                value={statisticAmountSpent}
                isNumber
                setValue={setStatisticAmountSpent}
              />
            </Grid>
          </Row>
          <InvestmentRow />
          <Row>
            <Title text="🕳 Current Balance" />
            <Grid withoutLabel>
              <Input
                name={MonthCalcFieldNames.currentBalance}
                value={currentBalance}
                setValue={setCurrentBalance}
                isNumber
                withoutLabel
              />
            </Grid>
          </Row>
          <Row>
            <Title text="💸 Future Expenses" />
            <Grid withoutLabel>
              <Input
                name={MonthCalcFieldNames.futureExpenses}
                value={futureExpenses}
                setValue={setFutureExpenses}
                isNumber
                withoutLabel
              />
            </Grid>
          </Row>
        </div>
      </Column>
      <Column>
        <div className="flex-1 overflow-y-auto ">
          <div className="grid md:grid-cols-[auto_1fr] grid-cols-[auto_1fr_auto_1fr] items-center md:p-6 p-3 gap-2">
            <ResultField text="Investments" value={forInvestments} />
            <ResultField text="Donate" value={forDonate / 2} />
            <ResultField text="Armen" value={armenMoney} />
            <ResultField text="Nastia" value={nastiaMoney} />
          </div>
        </div>
      </Column>
    </div>
  );
};
