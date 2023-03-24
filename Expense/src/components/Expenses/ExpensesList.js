import React from "react";
import ExpenseItem from "./ExpenseItem";
import styled from "styled-components";

const ExpensesListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <div className="empty-expense">Expense Not Found</div>;
  }

  return (
    <ExpensesListUl>
      {props.expenses.map((el) => {
        return (
          <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
        );
      })}
    </ExpensesListUl>
  );
};

export default ExpensesList;
