import type { NavbarItem } from "./Item.types";

export const Item = ({ text, isActive, onClick }: NavbarItem) => {
  const classIsActive = isActive ? " bg-gray-700" : "";

  return (
    <button
      className={
        "text-left md:w-full md:p-3 p-2 md:mb-3 text-lg focus:outline-none md:rounded-l-lg hover:bg-gray-700 font-light capitalize pr-2" +
        classIsActive
      }
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: text }}
    ></button>
  );
};
