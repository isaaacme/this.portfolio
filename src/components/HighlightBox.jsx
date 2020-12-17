import React from 'react';
import Styles from '../styles/HighlightBox.module.css';
import Emoji from 'a11y-react-emoji';

function HighlightBox({ symbol, label, text }) {
  return (
    <div className={Styles.HighlightBox}>
      <Emoji className={Styles.Emoji} symbol={symbol} label={label} />
      <p className={Styles.HighlightText}>{text}</p>
    </div>
  );
}

export default HighlightBox;
