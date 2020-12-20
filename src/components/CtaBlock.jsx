import React from 'react';
import Styles from '../styles/ProjectPage.module.css';
function CtaBlock({ url, text }) {
  return (
    <article>
      <a href={url} target="_blank" className={Styles.CtaBlock}>
        {text}
      </a>
    </article>
  );
}

export default CtaBlock;
