import type { JSXElements } from "@src/types/global";

export const Grid = ({ children }: { children: JSXElements }) => {
  return (
    <div className="grid gap-2 grid-cols-[auto_1fr] items-center">
      {children}
    </div>
  );
};
