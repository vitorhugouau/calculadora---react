import React from "react";


const Filho = ({ char, calculate, handleClick }) => {
    return(
        <button
            key={char}
            className={["/", "*", "-", "+", "="].includes(char) ? "operator" : ""}
            onClick={() => (char === "=" ? calculate() : handleClick(char))}
          >
            {char}
          </button>
    )
}

export default Filho