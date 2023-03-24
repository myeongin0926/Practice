import ExpensesList from "./ExpensesList";
import styled from "styled-components";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpensesArea = styled.div`
  background-color: black;
  width: 770px;
  max-height: 720px;
  min-height: 100px;
  margin: 0 auto;
  border: 2px solid white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  border-radius: 5px;
  .empty-expense {
    color: rgba(255, 255, 255, 0.6);
    margin-top: 20px;
    font-size: 15px;
  }
`;

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");
  const onChangefilterYear = (year) => {
    setFilterYear(year);
  };
  const filterdExpenses = props.expense.filter(
    (el) => el.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <ExpenseFilter
        expenses={filterdExpenses}
        basicYear={filterYear}
        selectYear={onChangefilterYear}
      />
      <ExpensesArea>
        <ExpensesList expenses={filterdExpenses} filterYear={filterYear} />
      </ExpensesArea>
    </div>
  );
};
export default Expenses;
