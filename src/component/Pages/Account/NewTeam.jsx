import React from "react";
import UserHeader from "./UserHeader";
import styles from "./NewTeam.module.scss";
import Button from "./Button";
import Uploader from "./../Account/component/Uploader";
import AddForm from "./add/AddForm";

export default function NewTeam() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <form
        id="new_team"
        action="/apply/"
        method="POST"
        className={styles.form}
      >
        <Uploader />

        <div className={styles.right_input}>
          <div className={styles.text_input}>
            <input
              className={styles.team_name}
              type="text"
              name="name"
              id="name"
              placeholder="Название команды"
              required
              autofocus
            />

            <textarea
              className={styles.team_description}
              name="comment"
              cols="40"
              rows="3"
              placeholder="Введите описание команды"
            ></textarea>
          </div>

          <button type="submit">
            <Button text={"Создать команду"} />
          </button>
        </div>
      </form>

      <h2>Добавление участника - отправленные заявки</h2>
      <AddForm />
    </div>
  );
}
