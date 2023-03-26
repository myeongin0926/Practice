import styled from "styled-components";

const UserItemArea = styled.div`
  width: 490px;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  color: #333;
  gap: 20px;
  .name {
    font-weight: 600;
    font-size: 18px;
  }
  .age {
    font-weight: 400;
    color: #666;
  }
`;

const UserItem = (props) => {
  return (
    <UserItemArea>
      <div className="name">{props.name}</div>
      <div className="age">({props.age} year old)</div>
    </UserItemArea>
  );
};

export default UserItem;
