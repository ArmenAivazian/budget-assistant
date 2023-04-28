import { useState } from "react";
import { Navbar } from "./components/Navbar";

export function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <div className="flex bg-gray-700 min-h-screen">
      <Navbar activeItem={activeMenuItem} setActiveItem={setActiveMenuItem} />
    </div>
  );
}

export default App;
