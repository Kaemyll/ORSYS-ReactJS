import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="App-header bg-dark">
      <Logo />
      <Navigation />
    </header>
  );
}
