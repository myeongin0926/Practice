import styled from "styled-components";
import ExpenseDate from "./ExpenseDate";

const ExpenseItemArea = styled.li`
  display: flex;
  width: 720px;
  align-items: center;
  gap: 15px;
  background-color: grey;
  border: 2px solid white;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;

  cursor: pointer;
  .expense-name {
    color: white;
    flex-grow: 1;
    font-size: 20px;
  }
  .expense-price {
    color: white;
    border: 2px solid white;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #a1aaa0;
    font-size: 18px;
    display: flex;
    line-height: 1.5;
  }
`;

const ExpenseItem = (props) => {
  return (
    <ExpenseItemArea>
      <ExpenseDate date={props.date} />
      <h3 className="expense-name">{props.title}</h3>
      <div className="expense-price">₩{props.amount}</div>
    </ExpenseItemArea>
  );
};

export default ExpenseItem;
