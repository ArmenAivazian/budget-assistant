import { memo } from "react";

import type { LabelProps } from "./Label.types";

import { styles } from "./Label.styles";

export const Label = memo(function Label({
  text,
  name,
  rangeValue,
  isDisabled,
}: LabelProps) {
  const { text: textClass, disabledText } = styles;

  return (
    <label
      htmlFor={name}
      className={isDisabled ? disabledText : textClass}
      dangerouslySetInnerHTML={{
        __html: `${text}${
          rangeValue
            ? `:<span class="w-14 inline-block">&nbsp;(${rangeValue}%)</span>`
            : ":"
        }`,
      }}
    ></label>
  );
});
