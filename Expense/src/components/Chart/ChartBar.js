import React from "react";
import styled from "styled-components";

const ChartBarItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .chart-bar__inner {
    height: 100%;
    width: 16px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .chart-bar__fill {
    background-color: #333;
    width: 100%;
    transition: all 0.3s ease-out;
    border-radius: 5px;
  }

  .chart-bar__label {
    font-weight: bold;
    font-size: 12px;
    text-align: center;
  }
`;
const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <ChartBarItem>
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </ChartBarItem>
  );
};

export default ChartBar;
