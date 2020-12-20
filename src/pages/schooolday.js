import Head from 'next/head';
import CtaBlock from '../components/CtaBlock';
import Header from '../components/Header';
import HighlightBox from '../components/HighlightBox';
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
          <p>
            The rise of remote education due to COVID has created the need for
            students and teachers alike to not only get familiar but use a chain
            of products that were never intended for such a wide types of people
            and levels of education, and the result is confusion, frustration
            and less time actually learning.
          </p>
          <h3>The Solution</h3>
          <p>
            Schooday allows you to have a noise free environment so students and
            teachers alike can communitace, ask quesptions, and focus on their
            education.
          </p>
        </article>
        <HighlightBox
          symbol="🧑‍🎓"
          label="student icon"
          text="About 40% of studdents never attend their online based schoolday and are considered drop-outs"
        />
        <CtaBlock
          url="https://www.figma.com/proto/jbJzEnpabKZqNU82KrMk8b/Schooolday?node-id=147%3A332&scaling=min-zoom"
          text="check out the Figma Prototype"
          symbol="👉"
          label="hand pointing right"
        />
      </main>
    </div>
  );
}
