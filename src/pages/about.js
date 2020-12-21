import Head from 'next/head';
import Header from '../components/Header';
import Stylesheet from '../styles/Layout.module.css';
import Styles from '../styles/About.module.css';
export default function About() {
  return (
    <div className={Stylesheet.PageContainer}>
      <Head>
        <title>about isaac</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <div className={Styles.aboutContent}>
        <img src="/me.webp" />
        <h1>Oh hi, so glad to see you!</h1>
        <p>
          I’ve always been creating. from drawing and music to coding websites
          and creating concepts for all types of projects. my career as a
          designer begun as an autodidact, designing party brochures and
          t-shirts for friends, until finally deciding to study formally,
          graduating in 2011 as a print designer.
        </p>
        <p>
          It took a couple of years but when I discovered the digital world and
          HTML & CSS, I was amazed at the limitless opportunities that space
          allowed, and so I worked constantly to sharp my coding skills and the
          learning all I could regarding what are digital products and how I
          could incorporate my previous experience to push me forward in this
          space.
          Now I’m in a place where I believe I can bring maximum value to
          my clients by going through the entire product cycle: from ideation,
          move into production, and then finally launch followed by continuous
          optimization.
        </p>
        <div className={Styles.socialLinks}>
        <p>
          I am open to full-time positions, preferably on small startups. 
          Here's some useful links for you,  oh-so-cool-and-good-looking potential employer! <span>😎 😘 🤑 😉</span>
        </p>
        <a href="https://www.notion.so/isaaac/My-Resume-cee5746113594c5f89b9835f5cfa1d3a" target="_blank">
            Notion CV
          </a>
          <a href="https://twitter.com/isaaacme" target="_blank">
            Twitter
          </a>
          <a href="https://www.linkedin.com/in/isaac-feldman/" target="_blank">
            Linkedin
          </a>
          <a href="https://github.com/isaaacme" target="_blank">
            Github
          </a>

        </div>
      </div>
    </div>
  );
}
