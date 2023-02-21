import React from "react";
import Profile from "../Main/Profile";

export default function Main() {
  let profileUser = {
    general: {
      nom: "Garnier",
      prenom: "David",
      age: 45,
    },
    infoAddr: {
      rue: "promenade du verger",
      cp: "92130",
      ville: "Issy-les-moulineaux",
      pays: "France",
    },
  };
  return (
    <div>
      <h1>Bienvenue sur mon site web !</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga
        pariatur quo repellat quaerat ipsum beatae odio laborum perferendis
        commodi ipsam, excepturi voluptates, accusantium porro cupiditate fugiat
        qui in omnis?
      </p>
      <Profile {...profileUser} />
    </div>
  );
}
