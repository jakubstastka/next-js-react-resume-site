import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import UpButton from "../components/UpButton";
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>
        {/* <Navbar /> */}
        <Main />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <UpButton />
      </div>
    </Layout>
  );
}
