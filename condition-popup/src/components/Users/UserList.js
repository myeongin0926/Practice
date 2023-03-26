import React from "react";
import UserItem from "./UserItem";
import styled from "styled-components";

const UserListArea = styled.div`
  width: 520px;
  height: 640px;
  overflow: auto;
  margin: 30px auto 0;
  border-radius: 15px;
  border: 1px solid #aaa;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const UserList = (props) => {
  return (
    <UserListArea>
      {props.users.map((user) => {
        return <UserItem key={user.key} name={user.name} age={user.age} />;
      })}
    </UserListArea>
  );
};

export default UserList;
