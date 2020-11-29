import React from "react";
import Styles from "../styles/ProjectTitle.module.css";

function ProjectTitle() {
  return (
    <div className={Styles.ProjectTitle}>
      <h1>LAZUZ</h1>
      <p>
        Lazuz is an app that builds a positive feedback loop and keeps you on
        track in your fitness journey
      </p>
    </div>
  );
}

export default ProjectTitle;
