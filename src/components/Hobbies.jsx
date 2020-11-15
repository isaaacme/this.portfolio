import React from "react";
import Styles from "../styles/Skills.module.css";
import SkillCard from "./SkillCard";

function Hobbies(props) {
  return (
    <section>
      <h2 className={Styles.SectionTitle}>
        what else i’ve got <br /> up my sleeves you may ask?
      </h2>
      <div className={Styles.SkillsGrid}>
        <SkillCard
          title="webmachines podcast"
          description="A podcast about the more interesting and least talked about subjects in the no-code space. Free form interviews with makers, Founders & visual developers"
          cta="listen to it"
        />
        <SkillCard
          title="samimkashim .xyz"
          description="Exclusive clothing brand from the weird side of the internet, brought to you risk free of dark web hackers and internet lurkers"
          cta="buy things"
        />
      </div>
    </section>
  );
}

export default Hobbies;
