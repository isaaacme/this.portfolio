import Head from 'next/head';
import Header from '../components/Header';
import CtaBlock from '../components/CtaBlock';
import HighlightBox from '../components/HighlightBox';
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
        <p>
          DeskSpace is a different and quieter option to get working spaces and
          an oppotunity for office owners to collaborate and montize their
          office space
        </p>
      </div>

      <main className={Styles.ProjectPageContent}>
        <article className={Styles.ContentBlock}>
          <h3>The Challenge</h3>
          <p>
            Once a perk/company value, COVID has made WFH a reality for most
            office workers - but many of them would still prefer a professional
            enviorment away from home. At the same time, commercial Real Estate
            is in constant decline, due to constant legal restrictions around
            the world.
          </p>
          <h3>The Solution</h3>
          <p>
            providing a place for office owners and office working folk to
            connect as an alternative to workspaces and WFH
          </p>
        </article>
        <HighlightBox
          symbol="🏡"
          label="a nice house"
          text="34% of U.S. workers would take a pay cut of up to 5% in order to work remotely"
        />
        <CtaBlock
          url="https://deskspace.netlify.app/"
          text="check out the live project"
          symbol="👉"
          label="hand pointing right"
        />
      </main>
    </div>
  );
}
