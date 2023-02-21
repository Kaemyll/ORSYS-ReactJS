import React from "react";

export default function ProfileGeneral({ nom, prenom, age }) {
  return (
    <div>
      <h4>Infos générales</h4>
      <ul>
        <li>Nom : {nom}</li>
        <li>Prénom : {prenom}</li>
        <li>Age : {age}</li>
      </ul>
    </div>
  );
}
