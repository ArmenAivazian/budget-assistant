import { MonthCalcFieldNames } from "@src/constants";
import { MonthBudgetCalculatorContext } from "@src/contexts";
import { convertStrNumToNum } from "@src/utils";
import { useContextSelector } from "use-context-selector";

import {
  Column,
  Grid,
  Input,
  InvestmentRow,
  RangeDatePicker,
  ResultField,
  Row,
  Title,
} from "./components";
import { getPersonalBudget } from "./utils";

export const MonthBudgetCalculator = () => {
  const armenSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ armenSalary }) => armenSalary
  );
  const setArmenSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setArmenSalary }) => setArmenSalary
  );

  const nastiaSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ nastiaSalary }) => nastiaSalary
  );
  const setNastiaSalary = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setNastiaSalary }) => setNastiaSalary
  );

  const statisticAmountSpent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ statisticAmountSpent }) => statisticAmountSpent
  );

  const setStatisticAmountSpent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setStatisticAmountSpent }) => setStatisticAmountSpent
  );

  const currentBalance = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ currentBalance }) => currentBalance
  );

  const futureExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ futureExpenses }) => futureExpenses
  );

  const setCurrentBalance = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setCurrentBalance }) => setCurrentBalance
  );

  const setFutureExpenses = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setFutureExpenses }) => setFutureExpenses
  );

  const statisticPeriod = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ statisticPeriod }) => statisticPeriod
  );

  const investmentPercent = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentPercent }) => investmentPercent
  );

  const investmentPartForArmy = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentPartForArmy }) => investmentPartForArmy
  );

  const investmentComBackAlive = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentComBackAlive }) => investmentComBackAlive
  );

  const investmentMilitaryBonds = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ investmentMilitaryBonds }) => investmentMilitaryBonds
  );

  const sumSalaries =
    convertStrNumToNum(armenSalary) + convertStrNumToNum(nastiaSalary);
  const expectExpenseDay =
    convertStrNumToNum(statisticAmountSpent) / statisticPeriod;
  const expectExpenseMonth =
    expectExpenseDay * 31 - convertStrNumToNum(currentBalance);
  const forInvestments = sumSalaries * (+investmentPercent / 100);
  const forArmy = forInvestments * (+investmentPartForArmy / 100);

  const differentPercent =
    convertStrNumToNum(nastiaSalary) / convertStrNumToNum(armenSalary);

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
            <ResultField text="For Investments" value={forInvestments} />
            <ResultField
              text="For Army"
              value={
                (forArmy -
                  convertStrNumToNum(investmentComBackAlive) -
                  convertStrNumToNum(investmentMilitaryBonds)) /
                2
              }
            />
            <ResultField
              text="For Armen"
              value={getPersonalBudget(
                armenSalary,
                investmentPercent,
                expectExpenseMonth,
                differentPercent,
                armenSalary > nastiaSalary
              )}
            />
            <ResultField
              text="For Nastia"
              value={getPersonalBudget(
                nastiaSalary,
                investmentPercent,
                expectExpenseMonth,
                differentPercent,
                nastiaSalary > armenSalary
              )}
            />
          </div>
        </div>
        <div className="border-t border-gray-800 px-4 py-3 sm:px-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3  text-lg font-bold text-white shadow-sm hover:rounded-none"
          >
            Save
          </a>
        </div>
      </Column>
    </div>
  );
};
