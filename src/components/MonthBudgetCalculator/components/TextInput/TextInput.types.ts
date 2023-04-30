import type { InputHTMLAttributes } from "react";

export interface TextInputProps {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}
