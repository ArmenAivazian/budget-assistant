import type { HTMLInputTypeAttribute } from "react";

type BaseInputProps<T extends HTMLInputTypeAttribute> = {
  name: string;
  type?: T;
  disabled?: boolean;
  withoutLabel?: boolean;
};

interface TextInputProps
  extends BaseInputProps<Exclude<HTMLInputTypeAttribute, "checkbox">> {
  value: string;
  isNumber?: boolean;
  setValue: (value: string) => void;
}

interface CheckboxInputProps extends BaseInputProps<"checkbox"> {
  value: boolean;
  isNumber?: never;
  setValue: (value: boolean) => void;
}

export type InputProps<T> = T extends "checkbox"
  ? CheckboxInputProps
  : TextInputProps;
