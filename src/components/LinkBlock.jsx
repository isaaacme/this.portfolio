import React from "react";
import Styles from "../styles/LinkBlock.module.css";
function LinkBlock() {
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
