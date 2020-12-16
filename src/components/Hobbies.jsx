import React from 'react';
import Styles from '../styles/Skills.module.css';
import Card from './Card';

function Hobbies(props) {
  return (
    <section>
      <h2 className={`${Styles.SectionTitle} ${Styles.SectionSkills}`}>
        what else i’ve got <br /> up my sleeves you may ask?
      </h2>
      <div className={`${Styles.SkillsGrid} ${Styles.hobbies}`}>
        <Card
          title="webmachines podcast"
          description="A podcast about the more interesting and least talked about subjects in the no-code space. Free form interviews with makers, Founders & visual developers"
          cta="listen to it"
          url="https://anchor.fm/thewebmachines"
          link="true"
        />
        <Card
          title="samimkashim.xyz"
          description="Exclusive clothing brand from the weird side of the internet, brought to you risk free of dark web hackers and internet lurkers"
          cta="buy things"
          url="https://www.redbubble.com/people/tnoar/explore?page=1&sortOrder=recent"
          link="true"
        />
      </div>
    </section>
  );
}

export default Hobbies;
