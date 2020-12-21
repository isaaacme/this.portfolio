import Head from 'next/head';
import CtaBlock from '../components/CtaBlock';
import Header from '../components/Header';
import HighlightBox from '../components/HighlightBox';
import StyleSheet from '../styles/Layout.module.css';
import Styles from '../styles/ProjectPage.module.css';
export default function Blicode() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>Blicode Product Studio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={`${Styles.ProjectTitle} ${Styles.Blicode}`}>
        <h1>Blicode</h1>
        <p>
          A Product Studio focused on getting non-technical founders to market
          faster
        </p>
      </div>
      <main className={Styles.ProjectPageContent}>
        <article className={`${Styles.ContentBlock} ${Styles.BlicodeContent}`}>
          <h3>you don't need a technical co-founder to build your product</h3>
          <p>
            Using no-code tools & a product-first approach we build products
            faster and at a fraction of the cost of traditional software
            development.
          </p>
        </article>
        <HighlightBox
          symbol="🤖"
          label="robot emoji"
          text="Most no-code projects are around 60% more time efficient and cost  efective compared to tradicional software development"
        />
        <CtaBlock
          url="https://blicode.co"
          text="check out the Live Project"
          symbol="👉"
          label="hand pointing right"
        />
      </main>
    </div>
  );
}
