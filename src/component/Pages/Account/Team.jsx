import React from "react";
import styles from "./User.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const data = [
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/pink.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/yellow.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/broun.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/pink.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/yellow.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/broun.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
];

export default function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div>
      <div className={styles.team_header}>
        <h1>Команды</h1>
        <NavLink to="/allTeam">
          <Button text={"Перейти"} />
        </NavLink>
      </div>

      <div className={styles.team}>
        <div className={styles.team_wrapper}>
          <Slider {...settings}>
            {data.map((d) => (
              <div className={styles.team_card}>
                <div className={styles.team_pic}>
                  <img src={d.img} alt="" className={styles.team_pic} />
                </div>
                <div className={styles.team_items}>
                  <p>{d.name}</p>
                  <p>{d.review}</p>
                  <button className={styles.user_button}>Перейти</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
