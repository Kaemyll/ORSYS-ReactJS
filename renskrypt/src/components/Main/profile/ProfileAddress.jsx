import React from "react";

export default function ProfileAddress({ rue, cp, ville, pays }) {
  return (
    <div>
      <h4>Infos de l'adresse</h4>
      <ul className="list-group">
        <li className="list-group-item">Rue : {rue}</li>
        <li className="list-group-item">CP : {cp}</li>
        <li className="list-group-item">Ville : {ville}</li>
        <li className="list-group-item">Pays : {pays}</li>
      </ul>
    </div>
  );
}
