import React from "react";
import { useState } from "react";
import Apple from "./Apple";
import useCounter from "../counter/useCounter";

export default function AppleBasket() {
  const [listTank, setTankList] = useState([]);
  const { counter, increase } = useCounter();

  function addMBT() {
    setTankList([...listTank, { id: counter + 1 }]);
    increase();
  }

  function deleteMBT(id) {
    // const copy = [...listTank];
    // const index = listTank.findIndex((tank) => tank.id === id);
    // copy.splice(index);
    // setTankList(copy);
    setTankList(listTank.filter((tank) => tank.id !== id));
  }

  return (
    <div>
      <h3>Main Battle Tank</h3>
      <button onClick={addMBT}>Ajouter MBT</button>
      <hr />
      {listTank.map((tank) => (
        <Apple key={tank.id} tank={tank} deleteMBT={deleteMBT} />
      ))}
    </div>
  );
}
