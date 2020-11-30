import Head from 'next/head';
import StyleSheet from '../styles/Layout.module.css';
import InnerPageHeader from '../components/InnerPageHeader';
import ProjectPage from '../components/ProjectPage';
export default function Lazuz() {
  return (
    <div className={StyleSheet.PageContainer}>
      <Head>
        <title>isaac feldman - web stuff maker</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <InnerPageHeader />
      <ProjectPage />
    </div>
  );
}
