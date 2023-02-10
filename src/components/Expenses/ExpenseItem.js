import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.data.date;
  const expenseItem = props.data.title;
  const expensePrice = props.data.amount;

  return (
    <Card className="expense-item">
      <ExpenseDate date={expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseItem}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
