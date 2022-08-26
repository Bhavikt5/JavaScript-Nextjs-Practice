import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";

const navbar = () => {
  const [showNav, setShowNav] = useState("");
  const [display, setdisplay] = useState("none");

  //   const navtoggle = () => {
  //     if (showNav === false) {
  //       setShowNav(true);
  //     } else {
  //       setShowNav(false);
  //     }
  //     console.log("navbar click");
  //   };

  const displayShow = () => {
    if (display == "") {
      setdisplay("initial");
    } else {
      setdisplay("");
    }

    console.log("display");
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftNav}>
          <img
            src="images/checked.png"
            alt=""
            width={40}
            onClick={displayShow}
          />
        </div>

        {!showNav ? (
          <div className={styles.midNav} style={{ display: display }}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
        ) : null}

        <div className={styles.rightNav}>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default navbar;
