import React from "react";
import Link from "next/link";
import Styles from "../styles/ProjectCard.module.css";
function ProjectCard({ title, description, cta, url, logo, alt }) {
  return (
    <div className={Styles.ProjectCard}>
      <img src={logo} alt={alt} />
      <div className={Styles.ProjectInfo}>
        <h3 className={Styles.title}>{title}</h3>
        <p className={Styles.description}>{description}</p>
        <Link className={Styles.link} href={`${url}`}>
          <a>
            <div className={Styles.cta}>{cta}</div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
