import React from "react";
import Styles from "../styles/ProjectPage.module.css";
import HighlightBox from "./HighlightBox";
import LinkBlock from "./LinkBlock";

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
        symbol="🤸‍♀️"
        label="person doing roll"
        text="67% of Gym memberships owners don’t attend the Gym at all."
      />
      <article className={Styles.ContentBlock}>
        <h3>Design Process</h3>
        <p>
          Which means not only most people are wasting their money, but this is
          actually the financial model for gyms overall. Diving into further
          research shows the reason people don’t persist is actually rooted in
          the lack of short term feedback and support from the environment,
          resulting in frustration and eventually quitting altogether.
        </p>
        <h3>Reasearch Conclusion</h3>
        <p>
          A circle of short and constant feedback loops is essential for people
          in order for them to advance and achieve their fitness goals.
        </p>
      </article>
      <article className={Styles.ContentBlock}>
        <h3>Online Survey</h3>
        <p>
          In addition to personal interviews with potential users, I ran an
          online questionnaire which showed people were aware of outdoor gyms
          but not considered them a viable alternative to the commercial Gym
          they were members of.
        </p>
        <img src="/imgs/survey-img.png" alt="" />
      </article>
      <article className={`${Styles.ContentBlock} ${Styles.ContentBlockImg}`}>
        <h3>Wireframing</h3>
        <p>
          The onboarding experience is a crucial element for the app, providing
          as much value and engagement on the front to the user, making sure he
          is involved and ready to move forward with the process.
          <br />
          <br />
          <LinkBlock
            url="https://z4effq.axshare.com/onboarding.html"
            cta="Check the Axure"
          />
        </p>
        <img src="/imgs/axure.png" alt="" />
      </article>
    </main>
  );
}

export default ProjectPage;
