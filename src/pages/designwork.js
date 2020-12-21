import Head from 'next/head';
import Header from '../components/Header';
import StyleSheet from '../styles/Layout.module.css';
import Styles from '../styles/ProjectPage.module.css';
export default function Logofolio() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>Design Work</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={`${Styles.ProjectTitle} ${Styles.DesignWork}`}>
        <h1>Design Work</h1>
        <p>
          A collection of Design work I've created for a plethora of clients
          throughout the years as a visual designer
        </p>
      </div>

      <main className={`${Styles.ProjectPageContent} ${Styles.DesignCards}`}>
        <img src="/works/dab-set.webp" alt="4 profesors logo" />
        <img src="/works/2.webp" alt="4 profesors logo" />
        <img src="/works/3.webp" alt="4 profesors logo" />
        <img src="/works/4.webp" alt="4 profesors logo" />
        <img src="/works/5.webp" alt="4 profesors logo" />
        <img src="/works/6.webp" alt="4 profesors logo" />
        <img src="/works/7.webp" alt="4 profesors logo" />
        <img src="/works/8.webp" alt="4 profesors logo" />
        <img src="/works/12.webp" alt="4 profesors logo" />
        <img src="/works/13.webp" alt="4 profesors logo" />
        <img src="/works/15.webp" alt="4 profesors logo" />
      </main>
    </div>
  );
}
