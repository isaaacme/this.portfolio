import Head from 'next/head';
import Header from '../components/Header';
import ProjectData from '../data/projects.json';
import HighlightBox from '../components/HighlightBox';
import LinkBlock from '../components/LinkBlock';
import StyleSheet from '../styles/Layout.module.css';
import Styles from '../styles/ProjectPage.module.css';

export default function Deskspace() {
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
        <h1>{ProjectData.projects.deskspace.projectTitle}</h1>
        <p>{ProjectData.projects.deskspace.projectBlurb}</p>
      </div>

      <main className={Styles.ProjectPageContent}>
        <article className={Styles.ContentBlock}>
          <h3>The Challenge</h3>
          <p>{ProjectData.projects.deskspace.theChallenge}</p>
          <h3>The Solution</h3>
          <p>{ProjectData.projects.deskspace.theSolution}</p>
        </article>
        <HighlightBox
          symbol="🤸‍♀️"
          label="person doing roll"
          text={`${ProjectData.projects.deskspace.highLight}`}
        />
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.deskspace.InfoTitle}</h3>
          <p>{ProjectData.projects.deskspace.InfoText}</p>
          <h3>{ProjectData.projects.deskspace.InfoTitle02}</h3>
          <p>{ProjectData.projects.deskspace.InfoText02}</p>
        </article>
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.deskspace.InfoTitle03}</h3>
          <p>{ProjectData.projects.deskspace.InfoText03}</p>
          <img src="/imgs/survey-img.webp" alt="" />
        </article>
        <article className={`${Styles.ContentBlock} ${Styles.ContentBlockImg}`}>
          <h3>{ProjectData.projects.deskspace.InfoTitle04}</h3>
          <p>{ProjectData.projects.deskspace.InfoText04}</p>
          <LinkBlock
            url="https://z4effq.axshare.com/onboarding.html"
            cta="Check the Axure"
          />
          <img src="/imgs/axure.webp" alt="" />
        </article>
        <article>
          <h3>UI Design</h3>
          <div className={Styles.UiScreens}>
            <img src="/imgs/deskspace-ui-01.webp" alt="" />
            <img src="/imgs/deskspace-ui-02.webp" alt="" />
          </div>
        </article>
      </main>
    </div>
  );
}
