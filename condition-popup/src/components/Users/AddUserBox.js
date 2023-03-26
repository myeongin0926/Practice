import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Ui/Card";
const MainBox = styled.form`
  width: 500px;
  height: 200px;
  border: 0.1px solid #aaa;
  padding: 10px;
  margin: 0px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  top: 20px;

  label {
    input {
      width: 500px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding-left: 10px;
      font-size: 16px;
      box-sizing: border-box;

      &:focus {
        outline: none;
      }
    }
  }
  button {
    width: 90px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
    transition: all 0.2s;
    &:hover {
      background-color: #ccc;
      color: white;
    }

    &:focus {
      outline: none;
    }
  }
`;

const AddUserBox = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!(name.trim() && age)) {
      props.upDateAlert("null");
    } else if (+age < 1) {
      props.upDateAlert("age");
    } else {
      props.upDateUser({ key: new Date().getTime(), name, age });
      setName("");
      setAge("");
    }
  };

  return (
    <Card>
      <MainBox onSubmit={addUserHandler}>
        <label>
          User Name
          <input value={name} onChange={changeNameHandler} type="text" />
        </label>
        <label>
          Age (Years)
          <input value={age} onChange={changeAgeHandler} type="number" />
        </label>

        <button type="submit">Add User</button>
      </MainBox>
    </Card>
  );
};

export default AddUserBox;
