import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import Navbar from "./components/Navbar/Navbar";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: '294.67', date: new Date(2022, 1, 28) },
  { id: 'e2', title: 'Udemy React Course', amount: '9.99', date: new Date(2019, 10, 15) },
  { id: 'e3', title: 'New Jacket', amount: '149.90', date: new Date(2021, 3, 19) },
  { id: 'e4', title: 'Haircut', amount: '15.00', date: new Date(2022, 5, 2) }
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter(expense => expense.id !== id);
    });
  }

  return (
    <div>
      <Navbar />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteItem={deleteExpenseHandler} />
    </div>
  );
}

export default App;
