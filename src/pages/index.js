// import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Styles from "../styles/Layout.module.css";
export default function Home() {
  return (
    <div className={Styles.PageContainer}>
      <Header />
      <Main />
    </div>
  );
}
