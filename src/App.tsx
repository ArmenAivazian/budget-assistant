import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MonthBudgetCalculator } from "./components/MonthBudgetCalculator";

export function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <div className="bg-gray-700 min-h-screen md:flex">
      <Navbar activeItem={activeMenuItem} setActiveItem={setActiveMenuItem} />

      {activeMenuItem === 0 && <MonthBudgetCalculator />}
    </div>
  );
}

export default App;
