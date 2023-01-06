import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  //let title = "Car insurance";
  /*const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle(newTitle);
  };
  const changeHandler = (event) => {
    setNewTitle(event.target.value);
          <button onClick={clickHandler}>Change Title</button>
      <input type="text" value={newTitle} onChange={changeHandler} />
  };*/
  return (
    <Card className="expense-item">
      <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
