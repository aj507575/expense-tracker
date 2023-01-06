//import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "School Fee",
    amount: "300",
    date: new Date(2022, 29, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: "350",
    date: new Date(2022, 12, 12),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: "2300",
    date: new Date(2022, 10, 12),
  },
  {
    id: "e4",
    title: "Food",
    amount: "1000",
    date: new Date(2022, 30, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // accepting data from child newexpense
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
