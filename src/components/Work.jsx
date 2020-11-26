import React from "react";
import Card from "./Card";
import Styles from "../styles/ProjectsGrid.module.css";

function Work() {
  return (
    <section>
      <h2>Selected Projects</h2>
      <div className={Styles.ProjectsGrid}>
        <Card
          className={Styles.Project}
          title="Lazuz Mobile app"
          description="
      Lazuz is an app that builds a positive feedback loop and keeps you on track in your fitness journey"
          cta="Check it out"
          url="/lazuz"
        />
        <Card
          className={Styles.Project}
          title="Lazuz Mobile app"
          description="
      Lazuz is an app that builds a positive feedback loop and keeps you on track in your fitness journey"
          cta="Check it out"
          url="/lazuz"
        />

        <Card
          className={Styles.Project}
          title="Lazuz Mobile app"
          description="
      Lazuz is an app that builds a positive feedback loop and keeps you on track in your fitness journey"
          cta="Check it out"
          url="/lazuz"
        />

        <Card
          className={Styles.Project}
          title="Lazuz Mobile app"
          description="
      Lazuz is an app that builds a positive feedback loop and keeps you on track in your fitness journey"
          cta="Check it out"
          url="/lazuz"
        />
      </div>
    </section>
  );
}

export default Work;
