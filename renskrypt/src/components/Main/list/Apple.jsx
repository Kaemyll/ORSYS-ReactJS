import React from "react";
import tankPng from "./MBT.png";

export default function Apple({ tank, deleteMBT }) {
  return (
    <img
      src={tankPng}
      alt="char de bataille"
      width="80"
      title={"char n°" + tank.id}
      onClick={() => deleteMBT(tank.id)}
    />
  );
}
