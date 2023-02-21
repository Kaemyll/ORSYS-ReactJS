import React from "react";
import Welcome from "../Main/Welcome";

export default function Main() {
  const username = "David";
  const age = 45;
  const address = "Issy-les-Moulineaux";
  const message = "J'aime la Royal Enfield Interceptor 650 !";
  return (
    <div>
      <h1>Bienvenue sur mon site web !</h1>
      <Welcome user={username} age={age} addr={address} msg={message} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga
        pariatur quo repellat quaerat ipsum beatae odio laborum perferendis
        commodi ipsam, excepturi voluptates, accusantium porro cupiditate fugiat
        qui in omnis?
      </p>
    </div>
  );
}
