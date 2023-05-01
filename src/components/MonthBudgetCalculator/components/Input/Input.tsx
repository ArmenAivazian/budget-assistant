import { ChangeEventHandler, memo, useState } from "react";

import type { InputProps } from "./Input.types";

import { styles } from "./Input.styles";

import { Label } from "./components";
import { addSpaceAfterThirdDigit, convertStringHyphen } from "./utils";

export const Input = memo(function Input({
  name,
  type = "text",
  setValue,
}: InputProps) {
  const isRange = type === "range";
  const isCheckbox = type === "checkbox";
  const hyphenName = convertStringHyphen(name);

  const [inputValue, setInputValue] = useState(isRange ? "0" : "");
  const [isInputChecked, setIsInputChecked] = useState(
    isCheckbox ? false : undefined
  );

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value, checked },
  }) => {
    setValue?.(checked || value);
    setIsInputChecked(checked);
    setInputValue(addSpaceAfterThirdDigit(value.replace(/[^0-9.]/g, "")));
  };

  const { text } = styles;

  return (
    <>
      <Label text={name} name={hyphenName} />
      <input
        type={type}
        name={hyphenName}
        id={hyphenName}
        autoComplete={hyphenName}
        className={type === "text" ? text : ""}
        onChange={handleInputChange}
        value={inputValue}
        checked={isInputChecked}
      />
    </>
  );
});
