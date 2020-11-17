import React from "react";
import Link from "next/link";
import Styles from "../styles/Header.module.css";
import CallToAction from "./CallToAction";

function Header() {
  return (
    <header className={Styles.Header}>
      <Link href="/">
        <a className={Styles.Name}>
          isaac
          <br />
          feldman
        </a>
      </Link>
      <CallToAction />
    </header>
  );
}

export default Header;
