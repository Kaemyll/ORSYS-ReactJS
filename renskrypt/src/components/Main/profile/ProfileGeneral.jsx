import React from "react";

export default function ProfileGeneral({ nom, prenom, age }) {
  return (
    <div>
      <h4>Infos générales</h4>
      <ul className="list-group">
        <li className="list-group-item">Nom : {nom}</li>
        <li className="list-group-item">Prénom : {prenom}</li>
        <li className="list-group-item">Age : {age}</li>
      </ul>
    </div>
  );
}
