import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="create to practice web developing concept"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <h1>Welcome to Home</h1>
        <button>
          <a href="/percentage">Percentage</a>
        </button>
        <button>
          <a href="/agecalculator">Age Calculator</a>
        </button>
      </div>
    </>
  );
};

export default Home;
