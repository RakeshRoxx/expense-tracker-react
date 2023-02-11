import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses!</h2>;
  }

  return (
    <li className="expenses-list ">
      {props.item.map((expanse) => (
        <ExpenseItem key={expanse.id} data={expanse} />
      ))}
    </li>
  );
};

export default ExpenseList;
