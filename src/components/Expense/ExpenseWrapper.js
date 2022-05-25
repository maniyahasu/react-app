import NewExpense from "../NewExpense/NewExpense";
import Expenses from "./Expenses";
import { useState } from "react";
import { BrowserRouter as Route, Router, Link } from "react-router-dom";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const ExpenseWrapper = (props) => {
  const [expenseList, setExpenseList] = useState(INITIAL_EXPENSES);

  const saveNewExpenseHandler = (newExpense) => {
    setExpenseList((prevState) => {
      const exp = { id: expenseList.length + 1, ...newExpense };
      return [exp, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
      <Expenses expenses={expenseList} />
    </div>
  );
};
export default ExpenseWrapper;
