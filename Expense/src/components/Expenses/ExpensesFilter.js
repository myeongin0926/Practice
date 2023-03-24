import React from "react";
import styled from "styled-components";
import ExpenseChart from "./ExpenseChart";
const ExpenseFilterArea = styled.div`
  border-radius: 5px;
  display: flex;
  width: 770px;
  margin: 5px auto;
  background-color: black;
  border: 2px solid white;
  padding: 20px 30px;
  position: relative;
  color: white;
  height: 200px;
  align-items: flex-end;
  label {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 3px;
    flex-grow: 1;
  }
  select {
    width: 105px;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: -7px;
    &:focus {
      outline: none;
    }
    option {
      margin-left: 20px;
    }
  }
`;

const ExpenseFilter = (props) => {
  const dropdownHandler = (event) => {
    props.selectYear(event.target.value);
  };

  return (
    <div>
      <ExpenseFilterArea>
        <ExpenseChart expenses={props.expenses} />
        <label>Filter By Year</label>
        <select value={props.basicYear} onChange={dropdownHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </ExpenseFilterArea>
    </div>
  );
};

export default ExpenseFilter;
