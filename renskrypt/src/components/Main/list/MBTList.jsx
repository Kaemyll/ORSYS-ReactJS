import React from "react";
import { useState } from "react";

export default function MBTList() {
  const [listTank, setList] = useState([
    { id: 1, title: "Leclerc" },
    { id: 2, title: "Ariete" },
    { id: 3, title: "Leopard 2A6" },
    { id: 4, title: "M1A2SEP Abrams" },
    { id: 5, title: "Merkava Mk IV" },
    { id: 6, title: "T-14 Armata" },
    { id: 7, title: "Challenger 2" },
  ]);

  // Fonction de tri de la liste de Chars de Bataille
  function sortList() {
    setList([...listTank].sort((a, b) => a.title.localeCompare(b.title)));
  }

  return (
    <div>
      <h3>Main Battle Tank</h3>
      <button onClick={sortList}>Trier</button>
      <ul>
        {listTank.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
