import React from "react";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Calculadora React</h1>
      <div className="Calculator">
        <Display value={2} />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
