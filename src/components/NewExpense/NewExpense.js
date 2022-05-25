import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  // Managing/storing data using useState
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  let [addNewExpense, setAddNewExpense] = useState(false);

  //   const [userInput, setUserInput] = useState({
  //     newTitle: "",
  //     newAmount: "",
  //     newDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   newTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, newTitle: event.target.value };
    // });
  };
  const amountChangeHandler = (event) => {
    setNewAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   newAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, newAmount: event.target.value };
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const formObject = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    props.onSaveNewExpense(formObject);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };
  const dateChangeHandler = (event) => {
    setNewDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   newDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return { ...prevState, newDate: event.target.value}
    // });
  };
  const toggleNewExpenseForm = () => {
    setAddNewExpense(!addNewExpense);
  };
  return (
    <div className="new-expense">
      {addNewExpense ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="1"
                step="1"
                value={newAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={newDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={toggleNewExpenseForm}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <div className="new-expense__controls justify-content-center mb-0">
          <button
            type="button"
            className="new-expense__control justify-content-center"
            onClick={toggleNewExpenseForm}
          >
            Add new expense
          </button>
        </div>
      )}
    </div>
  );
};
export default NewExpense;
