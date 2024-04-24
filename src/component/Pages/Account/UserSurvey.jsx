import React from "react";
import styles from "./User.module.scss";
import Button from "./Button";

const data = [
  {
    img: `..//images/7.jpg`,
    review: `Опрос почему вы поступили на магистратуру, а не пошли работать и
      каков ваш психологический возраст`,
  },
  {
    img: `..//images/8.jpg`,
    review: `Опрос почему вы поступили на магистратуру, а не пошли работать и
      каков ваш психологический возраст`,
  },
  {
    img: `..//images/9.jpg`,
    review: `Опрос почему вы поступили на магистратуру, а не пошли работать и
      каков ваш психологический возраст`,
  },
];

export default function UserSurvey() {
  return (
    <div>
      <h2 className={styles.survey_header}>Все опросы</h2>

      <div className={styles.survey_items}>
        {data.map((d) => (
          <div className={styles.survey_item}>
            <div className={`${styles.survey_item} ${styles.survey_item_pic}`}>
              <a href="" className={styles.survey_image}>
                <img src={d.img} alt="" className="" />
              </a>
              <a href="" className={styles.survey_name}>
                {d.review}
              </a>
              <Button text={'Перейти'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
