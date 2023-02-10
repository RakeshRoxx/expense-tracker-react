import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem data={props.item[0]}></ExpenseItem>
      <ExpenseItem data={props.item[1]}></ExpenseItem>
      <ExpenseItem data={props.item[2]}></ExpenseItem>
      <ExpenseItem data={props.item[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
