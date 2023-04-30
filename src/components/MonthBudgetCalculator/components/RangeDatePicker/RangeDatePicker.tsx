import { useState } from "react";

import Datepicker from "react-tailwindcss-datepicker";

import { DateValueType } from "react-tailwindcss-datepicker/dist/types";

export const RangeDatePicker = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  return (
    <>
      <label className="text-white">The first-last day of analysis:</label>
      <div>
        <Datepicker
          primaryColor="indigo"
          separator="—"
          value={value}
          onChange={handleValueChange}
          displayFormat={"DD/MM/YYYY"}
          inputClassName="text-center !font-bold !bg-gray-800 border-0 text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-800"
          toggleClassName="text-white"
          maxDate={new Date()}
          startWeekOn="mon"
        />
      </div>
    </>
  );
};
