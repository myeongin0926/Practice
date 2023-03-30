import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

const AlertArea = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1px);
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .message {
    padding-top: 20px;
    width: 520px;
    height: 120px;
    background-color: #eff;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: -200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    button {
      width: 60px;
      height: 30px;
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
  }
`;

const Alert = (props) => {
  if (props.alert === null) {
    return;
  }

  const ModalOverlay = (props) => {
    return (
      <AlertArea>
        <div className="message">
          <div>
            {props.alert === "null"
              ? "올바른 값을 입력하세요."
              : "유효한 나이를 입력하세요."}
          </div>
          <button
            onClick={() => {
              props.upDateAlert(null);
            }}
          >
            OK
          </button>
        </div>
      </AlertArea>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay upDateAlert={props.upDateAlert} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Alert;
