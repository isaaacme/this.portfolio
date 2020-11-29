import Head from "next/head";
import Styles from "../styles/Layout.module.css";
export default function Schooolday() {
  return (
    <div className={Styles.PageContainer}>
      <Head>
        <title>isaac feldman - web stuff maker</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
    </div>
  );
}
