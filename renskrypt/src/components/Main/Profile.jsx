import React from "react";
import ProfileAddress from "./ProfileAddress";
import ProfileGeneral from "./ProfileGeneral";
import { Container } from "react-bootstrap";

export default function Profile({ general, infoAddr }) {
  return (
    <div>
      <Container className="border rounded me-auto">
        <ProfileGeneral {...general} />
        <ProfileAddress {...infoAddr} />
      </Container>
    </div>
  );
}
