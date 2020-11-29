import React from "react";
import Styles from "../styles/ProjectPage.module.css";
import HighlightBox from "./HighlightBox";

function ProjectPage() {
  return (
    <main className={Styles.ProjectPageContent}>
      <article className={Styles.ContentBlock}>
        <h3>The Challenge</h3>
        <p>
          People do not persevere on their fitness goals, because there’s no
          immediate tangible value in the process
        </p>
        <h3>The Solution</h3>
        <p>
          providing a platform for receiving and giving support and feedback
          which keep users focused on their goals and encourages moving forward
        </p>
      </article>
      <HighlightBox
        symbol="⚡"
        label="lightning"
        text="67% of Gym memberships owners don’t attend the Gym at all."
      />
      <div> </div>
    </main>
  );
}

export default ProjectPage;
