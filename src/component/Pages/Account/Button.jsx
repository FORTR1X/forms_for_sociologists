import React from "react";
import styles from "./Button.module.scss";

export default function Button({text, onClick}) {
  return (
    <div>
      <button onClick={() => {onClick()}} href="" className={styles.user_button}>
        {text}
      </button>
    </div> 
  );
} 
