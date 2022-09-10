import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/WebsiteCard.module.css";

const WebsiteCard = (props) => {
  return (
    <>
      <Link href={props.link}>
        <div className={styles.container}>
          <Image
            src="/images/checked.png"
            alt="image"
            width={200}
            height={130}
          />
          <h3>{props.name}</h3>
        </div>
      </Link>
    </>
  );
};

export default WebsiteCard;
