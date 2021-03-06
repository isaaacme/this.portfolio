import React from 'react';
import Styles from '../styles/Skill.module.css';
import LinkBlock from './LinkBlock';
function Card({ title, description, cta, url }) {
  return (
    <div className={Styles.Skill}>
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>
      <LinkBlock cta={cta} url={url} />
    </div>
  );
}

export default Card;
