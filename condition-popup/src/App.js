import AddUserBox from "./components/Users/AddUserBox";
import UserList from "./components/Users/UserList";
import { useState } from "react";
import Alert from "./components/Users/Alert";
function App() {
  const [users, setUsers] = useState([]);
  const [alert, setAlert] = useState(null);

  const upDateAlert = (state) => {
    setAlert(state);
  };
  const upDateUsers = (users) => {
    setUsers((prevUsers) => [users, ...prevUsers]);
  };

  return (
    <div>
      <Alert alert={alert} upDateAlert={upDateAlert} />
      <AddUserBox upDateUser={upDateUsers} upDateAlert={upDateAlert} />
      <UserList users={users} />
    </div>
  );
}
export default App;