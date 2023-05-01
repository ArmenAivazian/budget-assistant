import { memo } from "react";

import type { LabelProps } from "./Label.types";

import { styles } from "./Label.styles";

export const Label = memo(function Label({ text, name }: LabelProps) {
  const { text: textClass } = styles;

  return (
    <label htmlFor={name} className={textClass}>
      {text + ":"}
    </label>
  );
});
