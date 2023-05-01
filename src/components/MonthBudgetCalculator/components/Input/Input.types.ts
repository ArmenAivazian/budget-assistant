import type { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  name: string;
  type?: HTMLInputTypeAttribute;
  setValue?: (value: string | boolean) => void;
}
