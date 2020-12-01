import React from 'react';
import Styles from '../styles/Skills.module.css';
import SkillCard from './SkillCard';

function Skills(props) {
  return (
    <section className={Styles.SkillsSection}>
      <h2 className={Styles.SectionTitle}>How can i add value to your team?</h2>
      <div className={Styles.SkillsGrid}>
        <SkillCard
          title="maker mindset"
          description="My autodidact nature has led me to be a part of many communities and contribute ideas and content, allowing me to master ideation and content creation in all forms"
        />

        <SkillCard
          title="business strategy"
          description="Understanding the business impact of my work empowers me to make better work and communicate and work with all branches of the organization, and transforming their needs into measurable deliverables"
        />
        <SkillCard
          title="Web development"
          description="The ability to look at products and user flows from a business prespetive allows me to create data driven decisions that guide my design to satisfy both visual communication needs and business goals"
        />
        <SkillCard
          title="ux/ui design"
          description="From Brand and Content Strategy through Wordpress and Webflow sites to custom hand coded React applications, along my journey I've collected all the tools to go from Idea to execution and incrementaly improving the product"
        />
      </div>
    </section>
  );
}

export default Skills;
