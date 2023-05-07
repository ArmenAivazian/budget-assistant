import { useState } from "react";

import { MonthBudgetCalculator, Navbar } from "@src/components";

import { ContextProviders } from "./ContextProviders";

export function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <div className="bg-gray-700 min-h-screen md:flex">
      <Navbar activeItem={activeMenuItem} setActiveItem={setActiveMenuItem} />

      {activeMenuItem === 0 && (
        <ContextProviders>
          <MonthBudgetCalculator />
        </ContextProviders>
      )}
    </div>
  );
}

export default App;
