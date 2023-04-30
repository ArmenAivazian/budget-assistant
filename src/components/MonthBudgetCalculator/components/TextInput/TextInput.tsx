import { ChangeEventHandler, useState } from "react";

import type { TextInputProps } from "./TextInput.types";

import { addSpaceAfterThirdDigit, convertStringHyphen } from "./utils";

export const TextInput = ({ name, type }: TextInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const hyphenName = convertStringHyphen(name);

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInputValue(addSpaceAfterThirdDigit(value.replace(/[^0-9.]/g, "")));
  };

  return (
    <>
      <label
        htmlFor={hyphenName}
        className="block font-medium leading-6 text-white"
      >
        {name + ":"}
      </label>
      <div>
        <input
          type={type || "text"}
          name={hyphenName}
          id={hyphenName}
          autoComplete={hyphenName}
          className=" text-center font-bold bg-gray-800 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:leading-6"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};
