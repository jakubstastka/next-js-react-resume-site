import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import UpButton from "../components/UpButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jakub Šťástka, a Fullstack Developer</title>
        <meta
          name="description"
          content="Resume for Jakub Stastka, a Fullstack Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Skills />
      <UpButton />
    </div>
  );
}
