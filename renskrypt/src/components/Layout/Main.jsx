import React from "react";
import { Button, Container } from "react-bootstrap";
import Profile from "../Main/profile/Profile";
import { useState } from "react";
import MBTRow from "../Main/list/MBTRow";

export default function Main() {
  const [show, setShow] = useState(true);
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
    <Container className="my-2">
      <h1>Bienvenue sur mon site web !</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt fuga
        pariatur quo repellat quaerat ipsum beatae odio laborum perferendis
        commodi ipsam, excepturi voluptates, accusantium porro cupiditate fugiat
        qui in omnis?
      </p>
      <MBTRow />
      <Button onClick={() => setShow((show) => !show)}>
        {show ? "Masquer" : "Afficher"}
      </Button>
      {show && <Profile {...profileUser} />}
    </Container>
  );
}
