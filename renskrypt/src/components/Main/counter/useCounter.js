// Hook custom (exemple)

import { useEffect, useState } from "react";

export default function useCounter(initialCounter) {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    setCounter(initialCounter);
  }, [initialCounter]);

  function increase() {
    setCounter((counter) => counter + 1);
  }

  function decrease() {
    setCounter((counter) => counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return { counter, increase, decrease, reset };
}
