import React from "react";

export default function ProfileAddress({ rue, cp, ville, pays }) {
  return (
    <div>
      <h2>Infos de l'adresse</h2>
      <ul>
        <li>Rue : {rue}</li>
        <li>CP : {cp}</li>
        <li>Ville : {ville}</li>
        <li>Pays : {pays}</li>
      </ul>
    </div>
  );
}
