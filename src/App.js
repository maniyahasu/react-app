import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const INITIAL_EXPENSES =  [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
 
  const [expenseList, setExpenseList] = useState(INITIAL_EXPENSES);

  const saveNewExpenseHandler = (newExpense) => {
    setExpenseList(prevState => {
      const exp = {id: expenseList.length + 1, ...newExpense};
      return [exp, ...prevState];
    });
  };

  // const filterYearChangeHandler = (year) => {
  //   const filteredList = expenseList.filter(el => el.date.getFullYear().toString() === year);
  //   setExpenseList(filteredList);
  // };
  
  return (
    <div className="App">
      <header className="App-header">
        <div>Header</div>
      </header>
      <div>
        <NewExpense onSaveNewExpense={saveNewExpenseHandler} />
        <Expenses expenses={expenseList} />
        {/* onFilterYearChange={filterYearChangeHandler} */}
      </div>
    </div>
  );
}

export default App;
