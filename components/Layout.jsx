import React from "react";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Jakub Šťástka, a Fullstack Developer</title>
      <meta
        name="description"
        content="Resume for Jakub Stastka, a Fullstack Developer"
      />
    </Head>
    <div className="bg-gray-900">
      <main className="">{children}</main>
    </div>
  </>
);

export default Layout;
