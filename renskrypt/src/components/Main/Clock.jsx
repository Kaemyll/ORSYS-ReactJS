import React from "react";
import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [color, setColor] = useState("");

  useEffect(() => {
    const id = setInterval(setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, [time]);

  useEffect(() => {
    setColor(time.getSeconds() % 2 === 1 ? "red" : "");
  }, [time]);

  return (
    <div className="border rounded">
      <h2>Horloge : </h2>
      <h3 style={{ color }}>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
