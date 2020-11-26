import React from "react";
import Link from "next/link";
import Styles from "../styles/Main.module.css";

function Main() {
  return (
    <div className={Styles.Main}>
      <h1 className={Styles.title}>Hi, I'm Isaac. a Web Stuff Maker</h1>
      <p className={Styles.blurb}>
        or a Web developer & Designer resolving end to end business problems, if
        you're not into abbreviations.
      </p>
      <Link href="/about">
        <a className={Styles.cta}>let's work together</a>
      </Link>
      <img
        src="/me.png"
        alt="its me drinking beer in a meetup lol"
        className={Styles.me}
      />
    </div>
  );
}

export default Main;
