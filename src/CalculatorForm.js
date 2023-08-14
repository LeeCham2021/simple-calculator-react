import React, { useState } from "react";
import "./Calculator.styles.css"; // Create this CSS file for styling

const CalculatorForm = () => {
  const [expression, setExpression] = useState("");
  var regExp = /^[0-9]+$/;
  const calculatorButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    ".",
    "0",
    "+",
    "-",
    "*",
    "/"
  ];
  const handleNumberClick = (number) => {
    setExpression(expression + number)
  };

  const handleOperatorClick = (operator) => {
    setExpression(expression + operator)

  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (expression) {
      const result = eval(expression);
      setExpression(result.toString());
    } else {
      setExpression("");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  return (
    <form onSubmit={handleCalculate} className="calculator">
      <input type="text" value={expression} readOnly />
      <div className="btn-operation">
        <button type="submit">=</button>
        <button onClick={handleClear}>C</button>
      </div>
      <div className="buttons">
        {calculatorButtons.map((item) => (
          <button
          style={{backgroundColor:regExp.test(item)?'grey':'orange', color:regExp.test(item)?'black':'white'}}
            key={Math.random()}
            onClick={
                regExp.test(item)
                ? () => handleNumberClick(item)
                : () => handleOperatorClick(item)
            }
          >
            {item}
          </button>
        ))}
      </div>
    </form>
  );
};

export default CalculatorForm;