import React from "react";
import UserHeader from "./UserHeader";
import styles from "./OneTeam.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
];

const person = [
  {
    name: "Вася Иванов",
    img: `..//images/4.jpg`,
    review: `Lorem ipsum`,
  },
  {
    name: "Иванов Вася",
    img: `..//images/5.jpg`,
    review: `Lorem ipsum`,
  },
  {
    name: "Иван Васильев",
    img: `..//images/6.jpg`,
    review: `Lorem ipsum`,
  },
];

const team = [
  {
    name: "Пишки",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum`,
  },
  {
    name: "Исы",
    img: `..//images/2.jpg`,
    review: `Lorem ipsum`,
  },
  {
    name: "Пины",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum`,
  },
];

const team_survey = [
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

export default function OneTeam() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <div className={styles.team_description}>
        {data.map((d) => (
          <div className={styles.team_item}>
            <a href="" className={styles.team_image}>
              <img src={d.img} alt="" className="" />
            </a>
            <div className={styles.team_text}>
              {d.name} <Button text={"Редактировать"} />
              {d.review} <Button text={"Редактировать"} />
            </div>
          </div>
        ))}

        <div className={styles.team_partisipants}>
          <div className={styles.team_title}>
            <h2>Участники команды</h2>
            <NavLink to="/addPart">
              <Button text={"Добавить участника"} />
            </NavLink>
          </div>

          <div className={styles.survey_items}>
            {person.map((p) => (
              <div className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <a href="" className={styles.survey_image}>
                    <img src={p.img} alt="" className="" />
                  </a>
                  <a href="" className={styles.survey_name}>
                    {p.name}
                  </a>
                  <a href="" className={styles.survey_name}>
                    {p.review}
                  </a>
                  <NavLink to="/oneTeam">
                    <Button text={"Об участнике"} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.team_team}>
          <div className={styles.team_title}>
            <h2>Группы участников</h2>
            <Button text={"Добавить команду"} />
          </div>

          <div className={styles.survey_items}>
            {team.map((t) => (
              <div className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <a href="" className={styles.survey_image}>
                    <img src={t.img} alt="" className="" />
                  </a>
                  <a href="" className={styles.survey_name}>
                    {t.name}
                  </a>
                  <a href="" className={styles.survey_name}>
                    {t.review}
                  </a>
                  <NavLink to="/oneTeam">
                    <Button text={"О команде"} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.team_survey}>
          <div className={styles.team_title}>
            <h1>Опросы команды</h1>
            <Button text={"Создать опрос"} />
          </div>

          <div className={styles.survey_items}>
            {team_survey.map((ts) => (
              <div className={styles.survey_item}>
                <div className={styles.survey_item}>
                  <a href="" className={styles.survey_image}>
                    <img src={ts.img} alt="" className="" />
                  </a>
                  <a href="" className={styles.survey_name}>
                    {ts.name}
                  </a>
                  <a href="" className={styles.survey_name}>
                    {ts.review}
                  </a>
                  <NavLink to="/oneTeam">
                    <Button text={"Перейти"} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
