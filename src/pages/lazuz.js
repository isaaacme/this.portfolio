import Head from 'next/head';
import LinkBlock from '../components/LinkBlock';
import Header from '../components/Header';
import HighlightBox from '../components/HighlightBox';
import ProjectData from '../data/projects.json';
import StyleSheet from '../styles/Layout.module.css';
import Styles from '../styles/ProjectPage.module.css';
export default function Lazuz() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>isaac feldman - web stuff maker</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={`${Styles.ProjectTitle} ${Styles.LazuzTitle}`}>
        <h1>lazuz</h1>
        <p>
          Lazuz is an app that builds a positive feedback loop and keeps you on
          track on your fitness journey
        </p>
      </div>

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
            which keep users focused on their goals and encourages moving
            forward
          </p>
        </article>
        <HighlightBox
          symbol="🏋🏿‍♀️"
          label="person doing roll"
          text="67% of Gym memberships owners don’t attend the Gym at all."
        />
        <article className={Styles.ContentBlock}>
          <h3>SCARCITY AS A SERVICE</h3>
          <p>
            On averge, a Gym can hold about 30% of their actual paying memebers.
            this is actually the financial model for gyms overall. Diving into
            further research shows the reason people don’t persist is actually
            rooted in the lack of short term feedback and support from the
            environment, resulting in frustration and eventually quitting
            altogether.
          </p>
          <h3>REASEARCH CONCLUSION</h3>
          <p>
            A circle of short and constant feedback loops is essential for
            people in order for them to advance and achieve their fitness goals.
          </p>
        </article>
        <article className={Styles.ContentBlock}>
          <h3>ONLINE SURVEY</h3>
          <p>
            In addition to personal interviews with potential users, I ran an
            online questionnaire which showed people were aware of outdoor gyms
            but not considered them a viable alternative to the commercial Gym
            they were members of.
          </p>
          <img src="/imgs/survey-img.webp" alt="" />
        </article>
        <article className={`${Styles.ContentBlock} ${Styles.ContentBlockImg}`}>
          <h3>WIREFRAMING</h3>
          <p>
            The onboarding experience is a crucial element for the app,
            providing as much value and engagement on the front to the user,
            making sure he is involved and ready to move forward with the
            process.
          </p>
          <LinkBlock
            url="https://z4effq.axshare.com/onboarding.html"
            cta="Check out the axure"
          />
          <img src="/imgs/axure.webp" alt="lazuz onboarding axure" />
        </article>
        <article>
          <h3>UI Screens</h3>
          <div className={Styles.UiScreens}>
            <img src="/imgs/lazuz-ui-01.webp" alt="location page" />
            <img src="/imgs/lazuz-ui-02.webp" alt="search locations screen" />
          </div>
        </article>
      </main>
    </div>
  );
}
