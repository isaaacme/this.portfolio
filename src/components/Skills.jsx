import React from "react";
import Styles from "../styles/Skills.module.css";
import SkillCard from "./SkillCard";

function Skills(props) {
  return (
    <section>
      <h2 className={Styles.SectionTitle}>what i can do</h2>
      <div className={Styles.SkillsGrid}>
        <SkillCard
          title="Web development"
          description="The ability to look at products and user flows from a business prespetive allows me to create data driven decisions that guide my design to satisfy both visual communication needs and business goals"
          cta="show me"
        />
        <SkillCard
          title="ux/ui design"
          description="From wordpress and webflow site to custom hand coded React Applications, along my journey I\'ve collected all the tools to go from Idea to Execution"
          cta="show me"
        />
        <SkillCard
          title="webmachines podcast"
          description="A podcast about the more interesting and least talked about subjects in the no-code space. Free form interviews with makers, Founders & visual developers"
          cta="listen to it"
        />
        <SkillCard
          title="samimkashim .xyz"
          description="Exclusive clothing brand from the weird side of the internet, brought to you risk free of dark web hackers and internet lurkers"
          cta="buy cool sh/t"
        />
      </div>
    </section>
  );
}

export default Skills;
