import React from "react";

export default function ProfileAddress({ rue, cp, ville, pays }) {
  return (
    <div>
      <h4>Infos de l'adresse</h4>
      <ul>
        <li>Rue : {rue}</li>
        <li>CP : {cp}</li>
        <li>Ville : {ville}</li>
        <li>Pays : {pays}</li>
      </ul>
    </div>
  );
}
