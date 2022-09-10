import Head from "next/head";
import Link from "next/link";
import React from "react";
import WebsiteCard from "../components/WebsiteCard";

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
        <section>
          <h1>Welcome to Home</h1>
          <button>
            <Link href="/percentage">Percentage</Link>
          </button>
          <button>
            <Link href="/agecalculator">Age Calculator</Link>
          </button>
        </section>

        <section className="websiteSection">
          <h1>Website Demo</h1>
          <div className="websiteCard">
            <WebsiteCard link="/todolist/todolist" name="Website Demo" />
            <WebsiteCard link="/home" name="Website Demo" />
            <WebsiteCard link="/home" name="Website Demo" />
            <WebsiteCard link="/home" name="Website Demo" />
            <WebsiteCard link="/home" name="Website Demo" />
            <WebsiteCard link="/home" name="Website Demo" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
