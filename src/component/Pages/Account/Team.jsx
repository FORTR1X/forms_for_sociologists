import React from "react";
import styles from "./User.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";

const data = [
  {
    name: "ПИ",
    img: `..//images/1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ИС",
    img: `..//images/2.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ИВТ",
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
    img: `..//images/2.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus perferendis officiis, expedita maxime vero molestias, voluptatibus ad nobis deserunt sunt, est enim recusandae vitae quam cum dignissimos numquam rem?`,
  },
  {
    name: "ПИЗДЕСЬ",
    img: `..//images/3.jpg`,
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
        <h2>Команды</h2>
        <NavLink to="/allTeam">
          <Button text={"Перейти"} />
        </NavLink>
      </div>
 
      <div className={styles.team}>
        <Slider {...settings}>
          {data.map((d) => (
            <NavLink to="/oneTeam">
              <motion.div className={styles.team_card}>
                <div className={styles.team_pic}>
                  <img src={d.img} alt="" className={styles.team_pic} />
                </div>
                <div className={styles.team_items}>
                  <p>{d.name}</p>
                  <p>{d.review}</p>

                  {/* <button className={styles.user_button}>Перейти</button> */}
                </div>
              </motion.div>
            </NavLink>
          ))}
        </Slider>
      </div>
    </div>
  );
}
