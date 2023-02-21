import React from "react";
import ProfileAddress from "./ProfileAddress";
import ProfileGeneral from "./ProfileGeneral";

export default function Profile({ general, infoAddr }) {
  return (
    <div>
      <ProfileGeneral {...general} />
      <ProfileAddress {...infoAddr} />
    </div>
  );
}
