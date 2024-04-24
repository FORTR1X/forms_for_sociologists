import React from "react";
import UserHeader from "./UserHeader";
import styles from "./AllTeam.module.scss";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/2.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
];

export default function AllTeam() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />

      <div className={styles.survey}>
        <div className={styles.team_header}>
          <h2>Все команды</h2>
          <NavLink to="/newTeam">
            <Button text={"Создать команду"} />
          </NavLink>
        </div>

        <div className={styles.survey_items}>
          {data.map((d) => (
            <div className={styles.survey_item}>
              <div className={styles.survey_item}>
                <a href="" className={styles.survey_image}>
                  <img src={d.img} alt="" className="" />
                </a>
                <a href="" className={styles.survey_name}>
                  {d.name}
                </a>
                <a href="" className={styles.survey_name}>
                  {d.review}
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
  );
}
