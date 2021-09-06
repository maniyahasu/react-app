import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

import "./Expenses.css";

const Expenses = (props) => {
  const { expenses } = props;
  const [filterYear, setFilterYear] = useState('select');
  const filterValueChangeHandler = (value) => {
    setFilterYear(value);
    // props.onFilterYearChange(value);
  };

  const filteredList = expenses.filter(el => {
    if (filterYear === 'select') {
      return expenses;
    } else {
      return el.date.getFullYear().toString() === filterYear;
    }
  });
  const expenseList = filteredList.map((el) => (
    <ExpenseItem item={el} key={el.id}></ExpenseItem>
  )); 
  return (
    <div className="expenses">
      <ExpensesChart expensesList={filteredList} />
      <ExpenseFilter onFilterValueChange={filterValueChangeHandler} filterYear={filterYear}/>
      { expenseList.length === 0 ? <p className="no-item-found">No item found !</p> : expenseList}
    </div>
  );
};
export default Expenses;
