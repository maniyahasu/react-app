
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { item } = props;
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date-month">
          {item.date.toLocaleString("en-US", { month: "long" })}
        </div>
        <div className="expense-date-year">
          {item.date.toLocaleString("en-US", { day: "2-digit" })}
        </div>
        <div className="expense-date-day">{item.date.getFullYear()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Update</button> */}
    </div>
  );
}

export default ExpenseItem;
