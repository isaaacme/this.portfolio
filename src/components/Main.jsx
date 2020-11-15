import React from "react";
import Styles from "../styles/Main.module.css";
import CallToAction from "./CallToAction";

function Main() {
  return (
    <div className={Styles.Main}>
      <h1 className={Styles.title}>
        Hi, I'm Isaac. <br />a Web Maker
      </h1>
      <p className={Styles.blurb}>
        or a Web developer & Designer resolving end to end business problems, if
        you're not into abbreviations.
      </p>
      <div className={Styles.cta}>let's work together</div>
      <img src="/me.png" alt="dd" className={Styles.me} />
    </div>
  );
}

export default Main;
