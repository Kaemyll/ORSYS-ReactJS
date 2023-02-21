import React from "react";

export default function Welcome(props) {
  const { user, age, addr, msg } = props;
  return (
    <div>
      Bonjour {user}, vous avez {age} ans, et êtes donc autorisé à accéder à ce
      site. Votre adresse est {addr}. Vous nous avez indiqué le message suivant
      : {msg}
    </div>
  );
}
