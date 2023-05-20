import { Props } from "./ResultField.types";

export const ResultField = ({ text, value }: Props) => {
  return (
    <>
      <h3>{`${text}:`}</h3>
      <h1>{value}</h1>
    </>
  );
};
