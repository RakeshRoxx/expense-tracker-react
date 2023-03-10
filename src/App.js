import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpanse from "./components/NewExpanse/NewExpanse";

const DUMMY_EXPANSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpanses] = useState(DUMMY_EXPANSES);

  const addExpenseData = (enteredDate) => {
    // console.log("IN APP JS!!!");
    // console.log(enteredDate);
    setExpanses((prevState) => {
      return [enteredDate, ...prevState];
    });
  };

  return (
    <div>
      <NewExpanse onAddExpanse={addExpenseData} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
