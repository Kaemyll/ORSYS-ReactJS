import React from "react";
import { useState } from "react";
import MBT from "./MBT";
import useCounter from "../counter/useCounter";

export default function MBTRow() {
  const [listTank, setTankList] = useState([]);
  const { counter, increase } = useCounter();

  /**
   * Fonction qui ajoute un élément
   */
  function addMBT() {
    setTankList([...listTank, { id: counter + 1 }]);
    increase();
  }

  /**
   * Fonction qui supprime un élément
   * @param {*} id
   */
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
        <MBT key={tank.id} tank={tank} deleteMBT={deleteMBT} />
      ))}
    </div>
  );
}
