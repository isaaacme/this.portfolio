import Head from "next/head";
import LinkBlock from "../components/LinkBlock";
import Header from "../components/Header";
import StyleSheet from "../styles/Layout.module.css";
import Styles from "../styles/ProjectPage.module.css";
export default function Logofolio() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>Logofolio</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={`${Styles.ProjectTitle} ${Styles.LogoFolioTitle}`}>
        <h1>Visual Design</h1>
        <p>
          {" "}
          A collection of Design work I've done for a plethora of clients
          through the years
        </p>
      </div>

      <main className={`${Styles.ProjectPageContent} ${Styles.DesignCards}`}>
        <img src="" alt="" />
      </main>
    </div>
  );
}
