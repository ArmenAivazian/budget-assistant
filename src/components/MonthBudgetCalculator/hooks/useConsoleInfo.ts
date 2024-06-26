import { useEffect } from "react";

export function useConsoleInfo(
  armenPartOfExpenses: number,
  nastiaPartOfExpenses: number,
  expensesPerDay: number,
  expensesPerMonth: number,
  forInvestments: number,
  forArmy: number,
  allExpenses: number
) {
  useEffect(() => {
    const armenPartInPercent = (armenPartOfExpenses * 100).toFixed(2);
    const nastiaPartInPercent = (nastiaPartOfExpenses * 100).toFixed(2);

    console.log(`Armen's Part of Expenses: ${armenPartInPercent}%`);
    console.log(`Nastia's Part of Expenses: ${nastiaPartInPercent}%`);

    console.log(`Predict Expenses Per Day: ${expensesPerDay.toFixed(2)}`);
    console.log(`Predict Expenses Per Month: ${expensesPerMonth.toFixed(2)}`);

    console.log(`For Investments: ${forInvestments.toFixed(2)}`);
    console.log(`For Army: ${forArmy.toFixed(2)}`);

    console.log(`All Predict Expenses: ${allExpenses.toFixed(2)}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
