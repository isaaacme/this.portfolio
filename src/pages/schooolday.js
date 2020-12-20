import Head from 'next/head';
import LinkBlock from '../components/LinkBlock';
import Header from '../components/Header';
import HighlightBox from '../components/HighlightBox';
import ProjectData from '../data/projects.json';
import StyleSheet from '../styles/Layout.module.css';
import Styles from '../styles/ProjectPage.module.css';
export default function Schooolday() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>Schooolday App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={`${Styles.ProjectTitle} ${Styles.SchooolDayTitle}`}>
        <h1>Schooolday</h1>
        <p>
          Schooolday gives teachers and students a noise-free enviorment to
          communicate and learn
        </p>
      </div>
      <main className={Styles.ProjectPageContent}>
        <article className={Styles.ContentBlock}>
          <h3>The Challenge</h3>
          <p>{ProjectData.projects.schooolday.theChallenge}</p>
          <h3>The Solution</h3>
          <p>{ProjectData.projects.schooolday.theSolution}</p>
        </article>
        <HighlightBox
          symbol="🧑‍🎓"
          label="student icon"
          text={`${ProjectData.projects.schooolday.highLight}`}
        />
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.schooolday.InfoTitle}</h3>
          <p>{ProjectData.projects.schooolday.InfoText}</p>
          <h3>{ProjectData.projects.schooolday.InfoTitle02}</h3>
          <p>{ProjectData.projects.schooolday.InfoText02}</p>
        </article>
      </main>
    </div>
  );
}
