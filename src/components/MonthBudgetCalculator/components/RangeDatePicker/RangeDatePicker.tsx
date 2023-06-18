import { ChangeEvent, useState } from "react";

import {
  MONTH_CALC_DATE_DEFAULT_END,
  MONTH_CALC_DATE_DEFAULT_START,
  MonthCalcFieldNames,
} from "@src/constants";
import { MonthBudgetCalculatorContext } from "@src/contexts";
import { getAmountDays } from "@src/utils";
import { useContextSelector } from "use-context-selector";

import { styles } from "./RangeDatePicker.styles";

export const RangeDatePicker = () => {
  const [startDate, setStartDate] = useState(MONTH_CALC_DATE_DEFAULT_START);
  const [endDate, setEndDate] = useState(MONTH_CALC_DATE_DEFAULT_END);

  const setStatisticPeriod = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setStatisticPeriod }) => setStatisticPeriod
  );

  const handleValueChange = (type: "start" | "end") => {
    const isStartDate = type === "start";

    return ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      if (isStartDate) {
        setStartDate(value);
        setStatisticPeriod(getAmountDays(value, endDate));
      } else {
        setEndDate(value);
        setStatisticPeriod(getAmountDays(startDate, value));
      }
    };
  };

  return (
    <>
      <label className="text-white">
        {MonthCalcFieldNames.daysOfAnalyticsFirst}:
      </label>
      <input
        type="date"
        value={startDate}
        onChange={handleValueChange("start")}
        className={styles.input}
      />

      <label className="text-white">
        {MonthCalcFieldNames.daysOfAnalyticsLast}:
      </label>
      <input
        type="date"
        value={endDate}
        onChange={handleValueChange("end")}
        className={styles.input}
      />
    </>
  );
};
