import React from "react";
import styles from "./User.module.scss";

export default function UserSurvey() {
  return (
    <div>
      <h1>Все опросы</h1>
      <div className={styles.survey_items}>
        <div className={styles.survey_item}>
          <div className={`${styles.survey_item} ${styles.survey_item_pic}`}>
            <a href="" className={styles.survey_image}>
              <img src={"..//images/pink.jpg"} alt="" className="" />
            </a>
            <a href="" className={styles.survey_name}>
              Опрос почему вы поступили на магистратуру, а не пошли работать и
              каков ваш психологический возраст
            </a>
            <a href="" className={styles.user_button}>
              Перейти
            </a>
          </div>
        </div>
        <div className={styles.survey_item}>
          <div className={`${styles.survey_item} ${styles.survey_item_pic}`}>
            <a href="" className={styles.survey_image}>
              <img src={"..//images/pink.jpg"} alt="" className="" />
            </a>
            <a href="" className={styles.survey_name}>
              Опрос почему вы поступили на магистратуру, а не пошли работать и
              каков ваш психологический возраст
            </a>
            <a href="" className={styles.user_button}>
              Перейти
            </a>
          </div>
        </div>
        <div className={styles.survey_item}>
          <div className={`${styles.survey_item} ${styles.survey_item_pic}`}>
            <a href="" className={styles.survey_image}>
              <img src={"..//images/pink.jpg"} alt="" className="" />
            </a>
            <a href="" className={styles.survey_name}>
              Опрос почему вы поступили на магистратуру, а не пошли работать и
              каков ваш психологический возраст
            </a>
            <a href="" className={styles.user_button}>
              Перейти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
