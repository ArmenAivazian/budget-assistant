import { Title } from "../Title/Title";

import { CardNumber } from "./CardNumber";
import { CARDS_NAME } from "./HelpfulData.constants";

export function HelpfulData() {
  return (
    <div className="w-full md:p-6 p-3">
      <Title text="💳 Cards" />

      <div className="grid gap-2 grid-cols-[auto_1fr_auto] items-center">
        {CARDS_NAME.map((name) => (
          <CardNumber key={name} name={name} />
        ))}
      </div>
    </div>
  );
}
