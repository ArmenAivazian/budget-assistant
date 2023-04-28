import { CalendarDaysIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { Item } from "./components/Item";
import type { NavbarProps } from "./Navbar.types";

export const Navbar = ({ activeItem, setActiveItem }: NavbarProps) => {
  const ITEMS = [
    { icon: <CalendarDaysIcon />, text: "month budget calculator" },
    { icon: <PaperClipIcon />, text: "helpful data" },
  ];

  return (
    <nav className="bg-gray-800 text-white md:min-h-screen flex md:flex-col md:items-start md:w-64 md:py-4 md:pl-4 top-0 left-0 h-14 w-full md:w-auto overflow-x-scroll whitespace-nowrap">
      {ITEMS.map(({ icon, text }, indx) => (
        <Item
          icon={icon}
          text={text}
          isActive={indx === activeItem}
          onClick={() => setActiveItem(indx)}
          key={text}
        />
      ))}
    </nav>
  );
};
