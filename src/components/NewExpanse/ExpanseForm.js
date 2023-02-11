import { useState } from "react";
import "./ExpanseForm.css";

function ExpanseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangedHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    // console.log(expenseDate);
    props.onSaveEnteredData(expenseDate);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangedHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={date}
            onChange={dateChangedHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expanse</button>
        </div>
      </div>
    </form>
  );
}

export default ExpanseForm;
