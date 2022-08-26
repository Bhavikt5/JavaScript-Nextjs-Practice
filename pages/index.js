import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import Alert from "../components/Alert";

export default function Home() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [alert, setalert] = useState(false);

  const formSubmit = () => {
    if (username === "game") {
      if (password === "password") {
        setTimeout(() => {
          Router.push("/home");
        }, 2000);
      }
    } else {
      setalert(true);
      setTimeout(() => {
        setalert(false);
      }, 2000);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Practice App</title>
        <meta
          name="description"
          content="create to practice web developing concept"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1 id="head">Hello World</h1>
        <input
          type="text"
          placeholder="enter username"
          onChange={(i) => setusername(i.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          onChange={(i) => setpassword(i.target.value)}
        />
        <button type="submit" onClick={formSubmit}>
          Sign In
        </button>
        {alert ? <Alert message="Username or Password Incorrect !!" /> : null}
      </div>
    </div>
  );
}
