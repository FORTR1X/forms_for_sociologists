import React from "react";
import styles from "./Button.module.scss";

export default function Button({text}) {
  return (
    <div>
      <a href="" className={styles.user_button}>
        {text}
      </a>
    </div> 
  );
} 
