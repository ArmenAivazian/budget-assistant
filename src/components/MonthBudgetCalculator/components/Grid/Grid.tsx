import { Props } from "./Grid.types";

export const Grid = ({ children, withoutLabel }: Props) => {
  return (
    <div
      {...(!withoutLabel && {
        className: "grid gap-2 grid-cols-[auto_1fr] items-center",
      })}
    >
      {children}
    </div>
  );
};
