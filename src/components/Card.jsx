import React from "react";
// import Link from "next/link";
import Styles from "../styles/Skill.module.css";
function Card({ title, description, cta, url }) {
  return (
    <div className={Styles.Skill}>
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>
    </div>
  );
}

export default Card;
