import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
      {/*<ExpenseItem
        date={props.item[0].date}
        title={props.item[0].Title}
        amount={props.item[0].amount}
      />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].Title}
        amount={props.item[1].amount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].Title}
        amount={props.item[2].amount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].Title}
        amount={props.item[3].amount}
      />*/}
    </Card>
  );
};

export default Expenses;
