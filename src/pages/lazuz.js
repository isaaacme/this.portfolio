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
      <div className={Styles.ProjectTitle}>
        <h1>{ProjectData.projects.lazuz.projectTitle}</h1>
        <p>{ProjectData.projects.lazuz.projectBlurb}</p>
      </div>

      <main className={Styles.ProjectPageContent}>
        <article className={Styles.ContentBlock}>
          <h3>The Challenge</h3>
          <p>{ProjectData.projects.lazuz.theChallenge}</p>
          <h3>The Solution</h3>
          <p>{ProjectData.projects.lazuz.theSolution}</p>
        </article>
        <HighlightBox
          symbol="🤸‍♀️"
          label="person doing roll"
          text={`${ProjectData.projects.lazuz.highLight}`}
        />
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.lazuz.InfoTitle}</h3>
          <p>{ProjectData.projects.lazuz.InfoText}</p>
          <h3>{ProjectData.projects.lazuz.InfoTitle02}</h3>
          <p>{ProjectData.projects.lazuz.InfoText02}</p>
        </article>
        <article className={Styles.ContentBlock}>
          <h3>{ProjectData.projects.lazuz.InfoTitle03}</h3>
          <p>{ProjectData.projects.lazuz.InfoText03}</p>
          <img src="/imgs/survey-img.png" alt="" />
        </article>
        <article className={`${Styles.ContentBlock} ${Styles.ContentBlockImg}`}>
          <h3>{ProjectData.projects.lazuz.InfoTitle04}</h3>
          <p>{ProjectData.projects.lazuz.InfoText04}</p>
          <img src="/imgs/axure.png" alt="" />
          <LinkBlock
            url="https://z4effq.axshare.com/onboarding.html"
            cta="Check the Axure"
          />
        </article>
        <article>
          <h3>UI Design</h3>
          <div className={Styles.UiScreens}>
            <img src="/imgs/lazuz-ui-01.png" alt="" />
            <img src="/imgs/lazuz-ui-02.png" alt="" />
          </div>
        </article>
      </main>
    </div>
  );
}
