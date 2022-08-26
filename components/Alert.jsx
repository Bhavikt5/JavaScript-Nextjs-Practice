import React from "react";
import styles from "../styles/Alert.module.css";

const Alert = ({ message }) => {
  return (
    <>
      <div className={styles.container}>
        <p>{message}</p>
      </div>
    </>
  );
};

export default Alert;
