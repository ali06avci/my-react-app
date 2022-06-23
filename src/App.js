import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Computer",
    amount: 1184.67,
    date: new Date(2022, 5, 24),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.12,
    date: new Date(2022, 5, 30),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  /*   return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  ); */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
