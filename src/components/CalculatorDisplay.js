import React from "react";

const CalculatorDisplay = ({result}) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ width: "100%" }}>
        <h1 style={{ textAlign: "end" }}>
          {result.length==0? '0':result}
        </h1>
      </div>
    </div>
  );
};

export default CalculatorDisplay;