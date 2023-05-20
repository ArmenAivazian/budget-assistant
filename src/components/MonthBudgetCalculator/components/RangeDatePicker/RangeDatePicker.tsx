import { useState } from "react";

import {
  MONTH_CALC_DATA_PICKER_DEFAULT_VALUES,
  MonthCalcFieldNames,
} from "@src/constants";
import { MonthBudgetCalculatorContext } from "@src/contexts";
import { getAmountDays } from "@src/utils";
import Datepicker from "react-tailwindcss-datepicker";
import { useContextSelector } from "use-context-selector";

import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export const RangeDatePicker = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: MONTH_CALC_DATA_PICKER_DEFAULT_VALUES.startData,
    endDate: MONTH_CALC_DATA_PICKER_DEFAULT_VALUES.endData,
  });

  const setStatisticPeriod = useContextSelector(
    MonthBudgetCalculatorContext,
    ({ setStatisticPeriod }) => setStatisticPeriod
  );

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);

    if (newValue === null) return;

    const { startDate, endDate } = newValue;

    if (startDate === null || endDate === null) return;

    setStatisticPeriod(getAmountDays(startDate, endDate));
  };

  return (
    <>
      <label className="text-white">
        {MonthCalcFieldNames.daysOfAnalytics}:
      </label>
      <div>
        <Datepicker
          primaryColor="indigo"
          separator="—"
          value={value}
          onChange={handleValueChange}
          displayFormat={"DD/MM/YYYY"}
          inputClassName="!font-bold !bg-gray-800 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800"
          toggleClassName="text-white"
          maxDate={new Date()}
          startWeekOn="mon"
          useRange={false}
        />
      </div>
    </>
  );
};
