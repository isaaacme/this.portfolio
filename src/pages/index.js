// import Head from "next/head";
import Header from "../components/Header";
import Hobbies from "../components/Hobbies";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Styles from "../styles/Layout.module.css";
export default function Home() {
  return (
    <div className={Styles.PageContainer}>
      <Header />
      <Main />
      <Skills />
      <Hobbies />
    </div>
  );
}
