import React from "react";
import Styles from "../styles/Header.module.css";
import CallToAction from "./CallToAction";

function Header() {
  return (
    <header className={Styles.Header}>
      <div className={Styles.Name}>
        isaac
        <br />
        feldman
      </div>
      <CallToAction />
    </header>
  );
}

export default Header;
