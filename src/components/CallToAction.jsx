import React from "react";
import Link from "next/link";
import Styles from "../styles/CallToAction.module.css";

function CallToAction() {
  return (
    <div className={Styles.CallToAction}>
      <Link href="/about">
        <a>let's connect</a>
      </Link>
    </div>
  );
}

export default CallToAction;
