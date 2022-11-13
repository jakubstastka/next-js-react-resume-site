import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jakub Šťástka, Fullstack Developer</title>
        <meta
          name="description"
          content="Resume for Jakub Stastka, Fullstack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}
