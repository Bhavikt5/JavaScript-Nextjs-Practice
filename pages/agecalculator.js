import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Age.module.css";

const agecalculator = () => {
  const [date, setdate] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [day, setday] = useState("");
  const [month, setmonth] = useState("");
  const [year, setyear] = useState("");
  // const [input, setinput] = useState("");

  const selectedDate = new Date(date);
  const currDate = new Date();
  const currentDate = `${currDate.getFullYear()}-${currDate.getMonth()}-${currDate.getDate()}`;

  // month ---------
  const sM = 12 - (selectedDate.getMonth() + 1);
  const sM1 = currDate.getMonth() - selectedDate.getMonth() + 1;

  const getCurrDate = new Date(currentDate);
  const diffTime = Math.abs(getCurrDate - selectedDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffYear = Math.ceil(diffDays / 365.25) - 1;

  const findDate = () => {
    if (diffTime != NaN) {
      setyear(diffYear);
      setmonth(Math.abs(sM + sM1 - 12));
      setday(currDate.getDate() - 1);
    } else {
      console.log("click date");
    }
    setShowResult(true);
  };

  return (
    <div>
      <Head>
        <title>Age Calculator</title>
        <meta
          name="description"
          content="create to practice web developing concept"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>Age Calculator</h1>

        <div>
          <p style={{ textAlign: "center", color: "white" }}>
            Enter Date Of Birth
          </p>
          <input type="date" onChange={(i) => setdate(i.target.value)} />
        </div>

        <div>
          <button onClick={() => setShowResult(false)}>Reset</button>
          <button onClick={findDate} type="submit">
            Calculate
          </button>
        </div>

        {!showResult ? null : (
          <div className={styles.curAgeCon}>
            <h3 className={styles.title}>Your Current Age</h3>
            <div className={styles.curAgeInputCon}>
              <div className={styles.curAgeInputInner}>
                <input readOnly name="year" value={year} />
                <label>Year</label>
              </div>
              <div className={styles.curAgeInputInner}>
                <input readOnly name="month" value={month} />
                <label>Month</label>
              </div>

              <div className={styles.curAgeInputInner}>
                <input readOnly name="day" value={day} />
                <label>Day</label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default agecalculator;
