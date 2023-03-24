import React from "react";
import ChartBar from "./ChartBar";
import styled from "styled-components";
const ChartArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 10px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  height: 130px;
`;
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <ChartArea>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </ChartArea>
  );
};

export default Chart;
