import React, { useState } from "react";
import "./App.css"; 
import Filho from "./Filho";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);

  const calculadora = () => {
    setInput(String(calculadoraExpression(input)));
  };

  const limpar = () => setInput("");

  return (
    <div className="calculator">
      <input className="display" value={input} readOnly />
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <Filho char={char} calculadora={calculadora} handleClick={handleClick}/>
        ))}
        <button className="limpar" onClick={limpar}>C</button>
      </div>
    </div>
  );
}

function calculadoraExpression(expression) {
  const result = eval(expression);
  return Number.isFinite(result) ? result : "Erro";
}

export default App;
