import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpanseChart from "./ExpenseChart";
function Expenses(props) {
  return (
    <ul>
      <Card className="expenses">
        <ExpanseChart expenses={props.item} />
        <ExpenseList item={props.item} />
        {/* <ExpenseItem data={props.item[0]}></ExpenseItem> */}
      </Card>
    </ul>
  );
}

export default Expenses;
