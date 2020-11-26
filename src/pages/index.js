import Head from "next/head";
import Header from "../components/Header";
import Hobbies from "../components/Hobbies";
import Work from "../components/Work";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Styles from "../styles/Layout.module.css";
export default function Home() {
  return (
    <div className={Styles.PageContainer}>
      <Head>
        <title>isaac feldman - web stuff maker</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Header />
      <Main />
      <Skills />
      <Work />
      <Hobbies />
    </div>
  );
}
