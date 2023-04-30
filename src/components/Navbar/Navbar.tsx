import type { NavbarProps } from "./Navbar.types";

import { Item } from "./components/Item";

export const Navbar = ({ activeItem, setActiveItem }: NavbarProps) => {
  const ITEMS = ["🗓&nbsp; month budget calculator", "✍&nbsp; helpful data"];

  return (
    <nav className="bg-gray-800 text-white md:min-h-screen flex md:flex-col md:items-start md:min-w-[17em] md:py-4 md:pl-4 top-0 left-0 h-14 overflow-x-scroll whitespace-nowrap">
      {ITEMS.map((text, indx) => (
        <Item
          text={text}
          isActive={indx === activeItem}
          onClick={() => setActiveItem(indx)}
          key={text}
        />
      ))}
    </nav>
  );
};
