import React from "react";
import Styles from "../styles/Skills.module.css";
import SkillCard from "./SkillCard";

function Skills(props) {
  return (
    <section className={Styles.SkillsSection}>
      <h2 className={Styles.SectionTitle}>How can i add value to your team?</h2>
      <div className={Styles.SkillsGrid}>
        <SkillCard
          title="Web development"
          description="The ability to look at products and user flows from a business prespetive allows me to create data driven decisions that guide my design to satisfy both visual communication needs and business goals"
          cta="show me"
          url="/devProjects"
        />
        <SkillCard
          title="ux/ui design"
          description="From wordpress and webflow site to custom hand coded React Applications, along my journey I've collected all the tools to go from Idea to Execution"
          cta="show me"
          url="/designProjects"
        />
      </div>
    </section>
  );
}

export default Skills;
