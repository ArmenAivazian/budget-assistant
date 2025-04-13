import { EVERY_THIRD_DIGIT } from "@src/constants";

import { Props } from "./ResultField.types";

export const ResultField = ({ text, value }: Props) => {
  const numValue = Math.round(value) || 0;
  const strValue = String(numValue).replace(EVERY_THIRD_DIGIT, " ");

  return (
    <>
      <h3>{`${text}:`}</h3>
      <h1>{strValue}</h1>
    </>
  );
};
