import React from "react";


const Filho = ({ char, calculadora, handleClick }) => {
    return(
        <button
            key={char}
            className={["/", "*", "-", "+", "="].includes(char) ? "operator" : ""}
            onClick={() => (char === "=" ? calculadora() : handleClick(char))}
          >
            {char}
          </button>
    )
}

export default Filho