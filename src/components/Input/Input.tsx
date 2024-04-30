import { HTMLInputTypeAttribute, InputHTMLAttributes, memo } from "react";

import { convertStrToHyphenStr } from "@src/utils";

import type { InputProps } from "./Input.types";

import { styles } from "./Input.styles";

import { Label } from "./components";
import { formattedValue } from "./utils";

const InputComponent = <T extends HTMLInputTypeAttribute>({
  name,
  value,
  type,
  isNumber,
  disabled,
  withoutLabel,
  setValue,
}: InputProps<T>) => {
  const hyphenName = convertStrToHyphenStr(name);

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
      {!withoutLabel && (
        <Label
          text={name}
          name={hyphenName}
          isDisabled={disabled}
          {...(type === "range" && { rangeValue: value })}
        />
      )}
      <input
        value={value}
        className={text}
        onChange={({ target }) =>
          setValue(formattedValue(target.value, !!isNumber))
        }
        onBlur={({ target }) => localStorage.setItem(hyphenName, target.value)}
        {...inputProps}
      />
    </>
  );
};

export const Input = memo(InputComponent) as typeof InputComponent;
