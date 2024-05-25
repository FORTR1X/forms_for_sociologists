import React from "react";
import styles from "./Button.module.scss";

export default function Button({text, onClick}) {
  return (
    <div>
      <button 
        onClick={() => {
          if (onClick != undefined)
            onClick()
        }} 
        className={styles.user_button}
      >
        {text}
      </button>
    </div> 
  );
} 
