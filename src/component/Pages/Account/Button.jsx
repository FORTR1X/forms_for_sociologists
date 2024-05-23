import React from "react";
import styles from "./Button.module.scss";

export default function Button({text}) {
  return (
    <div>
      <button href="" className={styles.user_button}>
        {text}
      </button>
    </div> 
  );
} 
