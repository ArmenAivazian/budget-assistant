import { useState } from "react";

import { MonthBudgetCalculator, Navbar } from "@src/components";

import { HelpfulData } from "./components/HelpfulData";

import { ContextProviders } from "./ContextProviders";

export function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const ActiveTab = () => {
    switch (activeMenuItem) {
      case 0:
        return <MonthBudgetCalculator />;
      case 1:
        return <HelpfulData />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-700 min-h-screen md:flex">
      <Navbar activeItem={activeMenuItem} setActiveItem={setActiveMenuItem} />
      <ContextProviders>
        <ActiveTab />
      </ContextProviders>
    </div>
  );
}

export default App;
