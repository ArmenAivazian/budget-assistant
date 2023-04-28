import type { NavbarItem } from "./Item.types";

export const Item = ({ icon, text, isActive, onClick }: NavbarItem) => {
  const classIsActive = isActive ? " bg-gray-700" : "";

  return (
    <button
      className={
        "flex items-center md:w-full md:p-3 p-2 md:mb-3 md:mb-0 text-lg focus:outline-none md:rounded-l-lg hover:bg-gray-700" +
        classIsActive
      }
      onClick={onClick}
    >
      <span className="md:mr-3 md:w-6 w-4 mr-2">{icon}</span>
      <span className="font-light capitalize pt-1 pr-2">{text}</span>
    </button>
  );
};
