import React from "react";
import UserHeader from "./UserHeader";
import Uploader from "./../Account/component/Uploader";
import styles from "./UserSetting.module.scss";
import Button from "./Button";

function UserSettings() {
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
              placeholder="Имя пользователя"
              required
              autofocus
            />
            <input
              className={styles.team_name}
              type="text"
              name="name"
              id="name"
              placeholder="Почта пользователя"
              required
              autofocus
            />
            <input
              className={styles.team_name}
              type="text"
              name="name"
              id="name"
              placeholder="Пароль старый"
              required
              autofocus
            />
            <input
              className={styles.team_name}
              type="text"
              name="name"
              id="name"
              placeholder="Пароль новый"
              required
              autofocus
            />
          </div>

          <button type="submit">
            <Button text={"Сохранить"} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserSettings;
