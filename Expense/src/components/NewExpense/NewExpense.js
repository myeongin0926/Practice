import React from "react";
import styled from "styled-components";
import ExpenseForm from "./ExpenseForm";

const NewExpenseArea = styled.div`
  width: 770px;
  height: 150px;
  padding-top: 8px;
  margin: 30px auto 0;
  background-color: black;
  border: 2px solid white;
  border-radius: 5px;
`;
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.addExpense(expenseData);
  };
  return (
    <NewExpenseArea>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </NewExpenseArea>
  );
};

export default NewExpense;
