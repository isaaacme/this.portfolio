import React from "react";
import Link from "next/link";
import Styles from "../styles/LinkBlock.module.css";
function LinkBlock({ url, cta }) {
  return (
    <div>
      <Link href={`${url}`}>
        <a>
          <div className={Styles.cta}>{cta}</div>
        </a>
      </Link>
    </div>
  );
}

export default LinkBlock;
