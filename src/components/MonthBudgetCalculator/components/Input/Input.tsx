import { HTMLInputTypeAttribute, InputHTMLAttributes, memo } from "react";

import type { InputProps } from "./Input.types";

import { styles } from "./Input.styles";

import { Label } from "./components";
import { convertStringHyphen, formattedValue } from "./utils";

const InputComponent = <T extends HTMLInputTypeAttribute>({
  name,
  value,
  type,
  isNumber,
  disabled,
  setValue,
}: InputProps<T>) => {
  const hyphenName = convertStringHyphen(name);

  const { text } = styles;

  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    type: type || "text",
    name: hyphenName,
    id: hyphenName,
    autoComplete: hyphenName,
    disabled,
  };

  if (typeof value === "boolean") {
    return (
      <>
        <Label text={name} name={hyphenName} isDisabled={disabled} />
        <input
          checked={value}
          onChange={() => setValue(!value)}
          {...inputProps}
        />
      </>
    );
  }

  return (
    <>
      <Label
        text={name}
        name={hyphenName}
        isDisabled={disabled}
        {...(type === "range" && { rangeValue: value })}
      />
      <input
        value={value}
        className={text}
        onChange={({ target }) =>
          setValue(formattedValue(target.value, !!isNumber))
        }
        {...inputProps}
      />
    </>
  );
};

export const Input = memo(InputComponent) as typeof InputComponent;
