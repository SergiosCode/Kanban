import React from "react";
import { ReactComponent as IconBoard } from "../assets/icon-board.svg";
import { ReactComponent as Logo } from "../assets/logo-dark.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Logo className="logo" />

      <h4>{`All Boards (3)`}</h4>
      <h3>
        <IconBoard className="iconboard" /> Platform Launch
      </h3>
      <h3>
        <IconBoard className="iconboard" /> Marketing Plan
      </h3>
      <h3>
        <IconBoard className="iconboard" /> Roadmap
      </h3>
      <h3><IconBoard className="iconboard" />+ Create New Board</h3>
    </nav>
  );
};

export default Navbar;
