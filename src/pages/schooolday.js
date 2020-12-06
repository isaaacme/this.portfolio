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
        <title>isaac feldman - web stuff maker</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={Styles.ProjectTitle}>
        <h1>{ProjectData.projects.schooolday.projectTitle}</h1>
        <p>{ProjectData.projects.schooolday.projectBlurb}</p>
      </div>

      <main className={Styles.ProjectPageContent}>
        <article className={Styles.ContentBlock}>
          <h3>The Challenge</h3>
          <p>{ProjectData.projects.schooolday.theChallenge}</p>
          <h3>The Solution</h3>
          <p>{ProjectData.projects.schooolday.theSolution}</p>
        </article>
        <HighlightBox
          symbol="🤸‍♀️"
          label="person doing roll"
          text={`${ProjectData.projects.schooolday.highLight}`}
        />
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.schooolday.InfoTitle}</h3>
          <p>{ProjectData.projects.schooolday.InfoText}</p>
          <h3>{ProjectData.projects.schooolday.InfoTitle02}</h3>
          <p>{ProjectData.projects.schooolday.InfoText02}</p>
        </article>
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.schooolday.InfoTitle03}</h3>
          <p>{ProjectData.projects.schooolday.InfoText03}</p>
          <img src="/imgs/survey-img.png" alt="" />
        </article>
        <article className={`${Styles.ContentBlock} ${Styles.ContentBlockImg}`}>
          <h3>{ProjectData.projects.schooolday.InfoTitle04}</h3>
          <p>{ProjectData.projects.schooolday.InfoText04}</p>
          <LinkBlock
            url="https://z4effq.axshare.com/onboarding.html"
            cta="Check the Axure"
          />
          <img src="/imgs/axure.png" alt="" />
        </article>
        <article>
          <h3>UI Design</h3>
          <div className={Styles.UiScreens}>
            <img src="/imgs/schooolday-ui-01.png" alt="" />
            <img src="/imgs/schooolday-ui-02.png" alt="" />
          </div>
        </article>
      </main>
    </div>
  );
}
