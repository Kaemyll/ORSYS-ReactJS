import React from "react";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import useCounter from "./useCounter";

export default function Counter({ initialCounter = 0 }) {
  const { counter, increase, decrease, reset } = useCounter(initialCounter);
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(counter > 0 ? "green" : counter < 0 ? "red" : "black");
  });

  return (
    <div>
      <h3>Compteur</h3>
      <span className="fw-bold fs-1" style={{ color }}>
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
