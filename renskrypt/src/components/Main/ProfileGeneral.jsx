import React from "react";

export default function ProfileGeneral({ nom, prenom, age }) {
  return (
    <div>
      <h2>Infos générales</h2>
      <ul>
        <li>Nom : {nom}</li>
        <li>Prénom : {prenom}</li>
        <li>Age : {age}</li>
      </ul>
    </div>
  );
}
