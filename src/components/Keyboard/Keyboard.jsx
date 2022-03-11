import "./Keyboard.css";

function Keyboard(props) {
  return (
    <div className="Keyboard">
      <button className="button triple">AC</button>
      <button className="button triple">√x</button>
      <button className="button triple">x²</button>
      <button className="button operators">%</button>
      <button className="button">7</button>
      <button className="button">8</button>
      <button className="button">9</button>
      <button className="button operators">/</button>
      <button className="button">4</button>
      <button className="button">5</button>
      <button className="button">6</button>
      <button className="button operators">*</button>
      <button className="button">1</button>
      <button className="button">2</button>
      <button className="button">3</button>
      <button className="button operators">+</button>
      <button className="button" id="double">
        0
      </button>
      <button className="button">.</button>
      <button className="button operators">=</button>
    </div>
  );
}

export default Keyboard;
