import React from "react";
import styles from "./AddPartisipiant.module.scss";

export default function AddForm() {
  return (
    <div className={styles.form_wrapper}>
      <form action=""> 
        <input
          type="email"
          placeholder="Введите email участника, которго вы хотите добавить в команду"
          name=""
          id=""
        />
        <button type="submit">Отправить приглашение</button>
      </form>
    </div>
  );
}
