import React, { useState } from "react";
import "./assets/css/reset.css"
import './assets/css/Display.css'
import "./assets/css/Keyboard.css";
import "./App.css";

function App() {
  const [ result, setResult ] = useState("0")

  const handleClick = e => {
    if(result === "0" || result === '.') {
      setResult(e.target.name)
    } else {
      setResult(result.concat(e.target.name))
    }
  }

  const clear = () => {
    setResult("0")
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const igual = () => {
    setResult(eval(result).toString())
  }

  return (
    <div className="App">
      <div className="Calculator">
        <div className="Display">{result}</div>
        <div className="Keyboard">
          <button onClick={clear} id="double" className="button operators">AC</button>
          <button onClick={backspace} className="button operators">C</button>
          <button name="-" onClick={handleClick} className="button operators">-</button>
          <button name="7" onClick={handleClick} className="button">7</button>
          <button name="8" onClick={handleClick} className="button">8</button>
          <button name="9" onClick={handleClick} className="button">9</button>
          <button name="/" onClick={handleClick} className="button operators">/</button>
          <button name="4" onClick={handleClick} className="button">4</button>
          <button name="5" onClick={handleClick} className="button">5</button>
          <button name="6" onClick={handleClick} className="button">6</button>
          <button name="*" onClick={handleClick} className="button operators">*</button>
          <button name="1" onClick={handleClick} className="button">1</button>
          <button name="2" onClick={handleClick} className="button">2</button>
          <button name="3" onClick={handleClick} className="button">3</button>
          <button name="+" onClick={handleClick} className="button operators">+</button>
          <button name="0" onClick={handleClick} className="button double" id="double">
            0
          </button>
          <button name="." onClick={handleClick} className="button">.</button>
          <button onClick={igual} className="button operators">=</button>
        </div>
      </div>
      <footer className="rodape">
      Feito por <a rel="noreferrer" href="https://jovimoura.github.io/portfolio/" className="github" target="_blank">João Victor Moura</a>
      </footer>
    </div>
  );
}

export default App;
