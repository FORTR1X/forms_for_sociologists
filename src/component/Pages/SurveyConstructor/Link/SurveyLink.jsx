import React from "react";
import { NavLink } from "react-router-dom";
import UserHeader from "../../Account/UserHeader";
import styles from "./SurveyLink.module.scss";
import Button from "../../Account/Button";

const data = [
  {
    img: `..//images/7.jpg`,
    name: "Как привить правильные привычки",
    review: `Насколько тяжело вставать по утрам и вести активный образ жизни`,
  },
];

export default function SurveyLink() {
  return (
    <div>
      <UserHeader />
      <div className="container mx-auto px-20">
        <div className="flex justify-between w-full border-b-2 border-gray-400 ">
          <NavLink to="/survey">
            <h2 className="text-gray-400">Настройки опроса</h2>
          </NavLink>
          <NavLink to="/surveys/content/1">
            <h2 className="text-gray-400">Конструктор опроса</h2>
          </NavLink>
          <NavLink to="/surveys/result">
            <h2 className="text-gray-400">Результаты опроса</h2>
          </NavLink>
          <NavLink to="/surveys/link">
            <h2>Ссылка на опрос</h2>
          </NavLink>
        </div>
      </div>

      <div className={styles.survey}>
        <div className={styles.survey_items}>
          <div className={styles.survey_item}>
            {data.map((d) => (
              <div className={styles.survey_item}>
                <div href="" className={styles.survey_image}>
                  <img src={d.img} alt="" className="" />
                </div>

                <div className={styles.survey_desc}>
                  <div href="" className={styles.survey_name}>
                    {d.name}
                  </div>
                  <div href="" className={styles.survey_review}>
                    {d.review}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button text={"Скопировать ссылку"} />
        </div>
      </div>
    </div>
  );
}
