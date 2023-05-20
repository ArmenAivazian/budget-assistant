import { JSXElements } from "@src/types/global";

export const Column = ({ children }: { children: JSXElements }) => {
  return (
    <div className="flex-[0_1_50%] md:border-r-2 border-gray-800 flex md:max-h-screen h-full flex-col">
      {children}
    </div>
  );
};
