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

      <div className={Styles.ProjectPageContent}>
        <div className={`${Styles.DesignCards} ${Styles.FirstGrid}`}>
          <img src="/works/dab-big.webp" alt="Douglas &and; Bloomberg" />
          <img src="/works/2.webp" alt="Paz Interactive" />
          <img src="/works/5.webp" alt="Tamar Guzansky" />
          <img src="/works/6.webp" alt="Yesodot Hazoar" />
          <img src="/works/8.webp" alt="Yunger Budik law firm" />
          <img src="/works/12.webp" alt="Douglas &and; Bloomberg logo" />
          <img src="/works/13.webp" alt="Golan Systems" />
          <img src="/works/15.webp" alt="Elad Rosenberg" />
        </div>
        <div className={`${Styles.DesignCards} ${Styles.SecondGrid}`}>
          <img src="/works/22.webp" alt="Elad Rosenberg logo on water bottle"/>
          <img src="/works/water.webp" alt="qqqqq"/>

       
      </div>
      </div>

 

    </div>
  );
}
