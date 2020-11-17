import Head from "next/head";
import Styles from "../styles/Layout.module.css";
export default function About() {
  return (
    <div className={Styles.PageContainer}>
      <Head>
        <title>about isaac</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <p>this is my about page</p>
    </div>
  );
}
