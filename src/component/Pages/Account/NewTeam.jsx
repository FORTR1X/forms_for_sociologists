import React from "react";
import UserHeader from "./UserHeader";
import styles from "./NewTeam.module.scss";
import Button from "./Button";

const data = [
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/pink.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
];

export default function NewTeam() {
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
              <a href="" className={styles.team_name}>
                {d.name} <Button text={"Редактировать"} />
              </a>
              <a href="" className={styles.team_name}>
                {d.review} <Button text={"Редактировать"} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
