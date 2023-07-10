# Budget Assistant 💰

---

#### Project Status: `In Progress 🚧`

**Budget Assistant** will help you control the joint budget:
1. Calculate future family expenses based on the data of previous expenses
2. Allocate the joint income of all family members to common needs, investments, and personal accounts.
3. Ability to customize investments
4. More in the future...

## Commands

<table>
    <tr>
        <th>Command</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><code>dev</code></td>
        <td>Run development mode</td>
    </tr>
    <tr>
        <td><code>build</code></td>
        <td>Build project</td>
    </tr>
    <tr>
        <td><code>preview</code></td>
        <td>Start builded project</td>
    </tr>
    <tr>
        <td><code>deploy</code></td>
        <td>Push project to production (Firebase)</td>
    </tr>
</table>

<sub>\* For `deploy` you need to add `.env` file (to root directory) with variables: `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `FIREBASE_MEASUREMENT_ID`</sub>

<sub><sub>\*\* You can get this variables from Firebase cabinet</sub></sub>

## ToDo List

### Features

- Implement field "Future Expenses"
- Implement button "Save"
- Ability to calculate the amount of refund or payment after the end of the month
- Print for information how much you plan to spend per month
- Release tab "Helpful Data"
- Add the ability to customize for the user (choose names, number of family members, types of investments, etc.)

### Tech Improvements

- Fix Rerenders
- Up utils/constants/providers to one level (in MonthBudgetCalculator)
- Rewrite import sorting
- Create CI / CD process
- Add tests
