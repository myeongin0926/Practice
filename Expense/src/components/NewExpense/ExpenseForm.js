import React, { useState } from "react";
import styled from "styled-components";

const ExpenseFormArea = styled.div`
  form {
    color: white;
    .new-expense__controls {
      width: 760px;
      display: flex;
      justify-content: space-around;
      .new-expense__control {
        display: flex;
        flex-direction: column;
        width: 220px;
        gap: 10px;
        label {
          font-size: 18px;
        }
        input {
          height: 40px;
          border: none;
          border-radius: 5px;
          padding-left: 10px;
          font-weight: bold;
        }
        input:focus {
          outline: none;
        }
      }
    }
    .new-expense__actions {
      width: 760px;
      height: 55px;
      display: flex;
      margin-top: 7px;
      justify-content: center;
      align-items: center;
      button {
        width: 96%;
        height: 50px;
        font-size: 17px;
        border: 1px solid black;
        transition: all 0.1s;
        background-color: #404040;
        border-radius: 5px;
        color: white;
        &:hover {
          background-color: #303030;
        }
        &:active {
          background-color: black;
        }
      }
    }
  }
`;

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enterdTitle) {
      return alert("제목을 입력 해주세요");
    } else if (!enterdAmount) {
      return alert("가격을 입력 해주세요");
    } else if (!enterdDate) {
      return alert("날짜를 입력 해주세요");
    }
    const uuid = crypto.randomUUID();

    const expenseData = {
      id: uuid,
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterdAmount("");
    setEnterdDate("");
    setEnterdTitle("");
  };
  return (
    <ExpenseFormArea>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enterdTitle}
              onChange={titleChangeHandler}
            />{" "}
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              onChange={amountChangeHandler}
              value={enterdAmount}
              min="100"
              step="10"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enterdDate}
              onChange={dateChangeHandler}
              min="2020-01-01"
              max="2023-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </ExpenseFormArea>
  );
};

export default ExpenseForm;
