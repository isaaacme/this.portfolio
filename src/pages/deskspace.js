import Head from 'next/head';
import Header from '../components/Header';
import HighlightBox from '../components/HighlightBox';
import LinkBlock from '../components/LinkBlock';
import StyleSheet from '../styles/Layout.module.css';
import Styles from '../styles/ProjectPage.module.css';

export default function Deskspace() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>Desk Space - get your desk space.</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={`${Styles.ProjectTitle} ${Styles.DeskSpaceTitle}`}>
        <h1>desk space</h1>
        <pre>{`checkit! ${data.D.projects.deskspace.projectTitle}`}</pre>
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
          symbol="🏡"
          label="a nice house"
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
          <h3>{ProjectData.projects.deskspace.UIScreenTitle}</h3>
          <div className={Styles.UiScreens}>
            <img src={ProjectData.projects.deskspace.UIimg01} alt="" />
            <img src={ProjectData.projects.deskspace.UIimg02} alt="" />
          </div>
        </article>
      </main>
    </div>
  );
}
