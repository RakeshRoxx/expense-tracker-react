import ExpanseForm from "./ExpanseForm";
import "./NewExpanse.css";

function NewExpanse(props) {
  const onSaveHandler = (onSaveEnteredDate) => {
    const enteredDate = {
      ...onSaveEnteredDate,
      id: Math.random().toString(),
    };
    // console.log(enteredDate);
    props.onAddExpanse(enteredDate);
  };
  return (
    <div className="new-expense">
      <ExpanseForm onSaveEnteredData={onSaveHandler} />
    </div>
  );
}

export default NewExpanse;
