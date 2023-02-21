import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  const countColor = counter > 0 ? "green" : counter < 0 ? "red" : "black";

  return (
    <div>
      <h3>Compteur</h3>
      <span className="fw-bold fs-1" style={{ color: countColor }}>
        {counter}
      </span>
      <div>
        <Button className="m-1" onClick={increase}>
          +
        </Button>
        <Button className="m-1" onClick={decrease}>
          -
        </Button>
        <Button className="m-1" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
