import React from "react";
import Link from "next/link";
import Styles from "../styles/Skill.module.css";
function SkillCard({ title, description, cta, url }) {
  return (
    <div className={Styles.Skill}>
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>
      <Link href={`${url}`}>
        <a>
          <div className={Styles.cta}>{cta}</div>
        </a>
      </Link>
    </div>
  );
}

export default SkillCard;
