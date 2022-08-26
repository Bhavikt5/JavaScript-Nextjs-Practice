import Head from "next/head";
import React, { useRef, useState } from "react";

const Percentage = () => {
  const [percentage, setpercentage] = useState();
  const [showAlert, setshowAlert] = useState(false);
  const [showResult, setshowResult] = useState(false);
  const [message, setmessage] = useState("");

  const findResult = () => {
    if (percentage >= 90 && percentage <= 100) {
      console.log("passed");
      setmessage("Passed with Destintion");
      setshowResult(true);
    } else if (percentage < 90 && percentage >= 70) {
      setmessage("Passed with A+");
      setshowResult(true);
    } else if (percentage < 70 && percentage >= 50) {
      setmessage("Passed with B+");
      setshowResult(true);
    } else if (percentage < 50 && percentage >= 35) {
      setmessage("Passed with C+");
      setshowResult(true);
    } else if (percentage < 35 && percentage >= 0) {
      setmessage("Fail");
      setshowResult(true);
    } else {
      console.log("Enter valid percentage");
      setshowAlert(true);
      setshowResult(false);
    }
  };

  const reset = () => {
    console.log("reset");
    inputRef.current.value = "";
    setshowAlert(false);
  };

  const inputRef = useRef(null);
  return (
    <>
      <Head>
        <title>Percentage sample</title>
        <meta
          name="description"
          content="create to practice web developing concept"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="home">
        <h1>Find Your Result</h1>

        <input
          ref={inputRef}
          type="number"
          placeholder="enter your percentage"
          onChange={(i) => setpercentage(i.target.value)}
        />

        {showAlert ? <p>Enter percentage between 0% - 100%</p> : null}
        <button onClick={findResult}>Find Result</button>
        {showAlert ? <button onClick={reset}> Reset</button> : null}
        {showResult ? <h3>{message}</h3> : null}
      </div>
    </>
  );
};

export default Percentage;
