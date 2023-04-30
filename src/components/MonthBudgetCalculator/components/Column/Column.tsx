import { JSXElements } from "types/global";

export const Column = ({ children }: { children: JSXElements }) => {
  return (
    <div className="flex-[0_1_50%] md:border-r-2 border-gray-800">
      {children}
    </div>
  );
};
