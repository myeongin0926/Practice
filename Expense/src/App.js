import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [...prevExpense, expense];
    });
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses expense={expense} />
    </div>
  );
}

export default App;
