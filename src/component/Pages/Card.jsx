import React from "react";
import {
  IoMailOutline,
  IoChevronForward,
  IoApps,
  IoNotifications,
  IoPieChart,
  IoNewspaper,
  IoCard,
  IoColorFill,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

const title = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: easing,
    },
  },
};

const hoverEffect = {
  whileHover: {
    scale: 1.5,
    rotate: 630,
    borderRadius: "100%",
  },
  whileTap: {
    scale: 8,
    rotate: 630,
    borderRadius: "100%",
  },
};

const data = [
  {
    title: "Виды представления вопросов",
    description: "Отображайте вопросы в том виде, в котором считаете нужным",
  },
  {
    title: "Время прохождения опроса",
    description: "Задавайте даты и время на прохождение опроса",
  },
  {
    title: "Командная работа",
    description: "Создавайте группы для совместной работы",
  },
  {
    title: "Встроенная аналитика ответов",
    description: "Удобное представление результатов опроса",
  },
  {
    title: "Без подписок и предоплат",
    description: "Полностью бесплатный функционал",
  },
  {
    title: "Удобный аккаунт",
    description: "Вся необходимая информация хранится в одном месте",
  },
];

export default function Card() {
  return (
    <motion.div className={styles.service_container}>
      <div className={styles.title_wrapper}>
        <motion.span
          className={styles.service_title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Наши возможности
        </motion.span>
        <motion.h2
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Экономьте ваше время и нервы с помощью нашего сервиса
        </motion.h2>
      </div>

      <motion.div
        className={styles.service_card}
        variants={container}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false }}
      >
        {data.map((d) => (
          <motion.div className={styles.card} variants={item}>
                {/* <motion.span className={styles.service_icon} style={{ backgroundColor: "ddfbf9" }} variants={hoverEffect} whileHover="whileHover" whileTap="whileTap">
              <IconContext.Provider
                value={{
                  color: "#14da8f",
                  size: "22px",
                }}
              >
                <IoMailOutline />
              </IconContext.Provider>
            </motion.span> */}
              <h3>{d.title}</h3>
              <h4>{d.description}</h4>
                {/* <a href="#">
              <span>Learn more</span>
              <IconContext.Provider
                value={{
                  color: "#14da8f",
                  size: "18px",
                }}
              >
                <IoChevronForward />
              </IconContext.Provider>
            </a> */}
          </motion.div>
        ))}
        
        {/* <div className={`${styles.card} ${styles.dark}`}>
          <img
            src={process.env.PUBLIC_URL + "/images/line.png"}
            alt="line"
            className={styles.line}
          />
          <h2>
            +4 <br /> больше...
          </h2>
          <a href="#">
            <span>View more...</span>
            <span
              className={styles.service_icon}
              style={{ backgroundColor: "ddfbf9" }}
            >
              <IconContext.Provider
                value={{
                  color: "#fff",
                  size: "18px",
                }}
              >
                <IoMailOutline />
              </IconContext.Provider>
            </span>
            <IconContext.Provider
              value={{
                color: "#fff",
                size: "18px",
              }}
            >
              <IoChevronForward />
            </IconContext.Provider>
          </a>
        </div> */}
      </motion.div>
    </motion.div>
  );
}
