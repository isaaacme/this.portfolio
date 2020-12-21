import Head from 'next/head';
import Header from '../components/Header';
import Hobbies from '../components/Hobbies';
import Work from '../components/Work';
import Main from '../components/Main';
import Skills from '../components/Skills';
import Styles from '../styles/Layout.module.css';
export default function Home() {
  return (
    <div className={Styles.PageContainer}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          ></meta>
          <meta name="title" content="Hi, I'm Isaac. a Web Stuff Maker"></meta>
          <meta name="description" content="or a Web developer & Designer resolving end to end business problems, if you're not into abbreviations."></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:url" content="https://isaaac.me/"></meta>
          <meta property="og:title" content="Hi, I'm Isaac. a Web Stuff Maker"></meta>
          <meta property="og:description" content="or a Web developer & Designer resolving end to end business problems, if you're not into abbreviations."></meta>
          <meta property="og:image" content="/card.webp"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <meta property="twitter:url" content="https://isaaac.me/"></meta>
          <meta property="twitter:title" content="Hi, I'm Isaac. a Web Stuff Maker"></meta>
          <meta property="twitter:description" content="or a Web developer & Designer resolving end to end business problems, if you're not into abbreviations."></meta>
          <meta property="twitter:image" content="/card.webp"></meta>
          <title>Hi, I'm Isaac. a Web Stuff Maker</title>
      </Head>
      <Header />
      <Main />
      <Work />
      <Skills />
      <Hobbies />
    </div>
  );
}


/*


<meta name="title" content="Hi, I'm Isaac. a Web Stuff Maker"></meta>
<meta name="description" content="or a Web developer & Designer resolving end to end business problems, if you're not into abbreviations."></meta>

<meta property="og:type" content="website"></meta>
<meta property="og:url" content="https://isaaac.me/"></meta>
<meta property="og:title" content="Hi, I'm Isaac. a Web Stuff Maker"></meta>
<meta property="og:description" content="or a Web developer & Designer resolving end to end business problems, if you're not into abbreviations."></meta>
<meta property="og:image" content=""></meta>

<meta property="twitter:card" content="summary_large_image"></meta>
<meta property="twitter:url" content="https://isaaac.me/"></meta>
<meta property="twitter:title" content="Hi, I'm Isaac. a Web Stuff Maker"></meta>
<meta property="twitter:description" content="or a Web developer & Designer resolving end to end business problems, if you're not into abbreviations."></meta>
<meta property="twitter:image" content=""></meta>


*/