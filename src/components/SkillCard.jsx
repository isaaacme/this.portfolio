import React from "react";
import Styles from "../styles/Skill.module.css";
function SkillCard({ title, description }) {
  return (
    <div className={Styles.Skill}>
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>
      <div className={Styles.cta}>let's work together</div>
    </div>
  );
}

export default SkillCard;
