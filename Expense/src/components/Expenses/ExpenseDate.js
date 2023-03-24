import styled from "styled-components";

const ExpenseDateArea = styled.div`
  border: 2px solid white;
  background-color: #333333;
  padding: 5px 15px;
  color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  .expense-date__month {
    font-size: 14px;
  }
  .expense-date__year {
    font-size: 18px;
    font-weight: 600;
  }
  .expense-date__day {
    font-size: 16px;
  }
`;

const ExpenseDate = (props) => {
  return (
    <ExpenseDateArea>
      <div className="expense-date__month">
        {props.date.toLocaleString("en-us", { month: "short" })}
      </div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
      <div className="expense-date__day">
        {props.date.toLocaleString("en-us", { day: "2-digit" })}
      </div>
    </ExpenseDateArea>
  );
};

export default ExpenseDate;
