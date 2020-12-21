import React from 'react';
import ProjectCard from './ProjectCard';
import Styles from '../styles/ProjectsGrid.module.css';

function Work() {
  return (
    <section>
      <h2>Selected Projects</h2>
      <div className={Styles.ProjectsGrid}>
        <ProjectCard
          logo="/logos/lazuz.svg"
          alt=""
          description="
      Lazuz is an app that builds a positive feedback loop and keeps you on track in your fitness journey"
          cta="Check it out"
          url="/lazuz"
        />
        <ProjectCard
          logo="/logos/deskspace.svg"
          alt=""
          description="DeskSpace is a place
          to find an empty desks for freelancers who don’t like large open workspaces "
          cta="Check it out"
          url="/deskspace"
        />

        <ProjectCard
          logo="/logos/schooolday.svg"
          alt=""
          description="Schooolday is a dedicated space for students and teachers to communicate without external noise"
          cta="Check it out"
          url="/schooolday"
        />

        <ProjectCard
          logo="/logos/blicode.svg"
          alt=""
          description="a Product Studio focused on getting non-technical founders to market faster"
          cta="Check it out"
          url="/blicode"
        />

        <ProjectCard
          logo="/logos/designwork.svg"
          alt=""
          description="A collection of Visual Design Work I've done so far"
          cta="Check it out"
          url="/designwork"
        />
      </div>
    </section>
  );
}

export default Work;
