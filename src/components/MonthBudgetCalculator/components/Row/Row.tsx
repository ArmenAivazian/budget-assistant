import type { JSXElements } from "@src/types/global";

export const Row = ({ children }: { children: JSXElements }) => {
  return (
    <div className="md:p-6 p-3 border-b-2 border-gray-800">{children}</div>
  );
};
