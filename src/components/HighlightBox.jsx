import React from "react";
import Styles from "../styles/HighlightBox.module.css";
import Emoji from "a11y-react-emoji";

function HighlightBox({ symbol, label, text }) {
  return (
    <div className={Styles.HighlightBox}>
      <Emoji symbol={symbol} label={label} />
      <p>{text}</p>
    </div>
  );
}

export default HighlightBox;
