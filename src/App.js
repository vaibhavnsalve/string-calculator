import React, { useState } from "react";
import { add } from "./StringCalculator";
import './App.css';

const StringCalculatorApp = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(null);
      console.log("Input received:", input); 
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
    }
  };
  


  return (
    <div className="container">
      <h1>String Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers (comma or new line separated)"
          className="input-box"
        />
        <button type="submit" className="calculate-button">Calculate</button>
      </form>
      {result !== null && <h3>Result: {result}</h3>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default StringCalculatorApp;
