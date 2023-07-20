import { convertStrNumToNum } from "@src/utils";

export function getPersonalBudget(
  salary: string,
  investmentPercent: string,
  expectExpenseMonth: number,
  differentPercent: number,
  isBigger: boolean
) {
  const coefficient = isBigger ? differentPercent : 1 - differentPercent;

  const formattedSalary = convertStrNumToNum(salary);
  const partForInvestment = formattedSalary * (+investmentPercent / 100);
  const partForExpectExpense = expectExpenseMonth * coefficient;

  return formattedSalary - partForInvestment - partForExpectExpense;
}
