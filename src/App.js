import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
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
