import React from "react";
import UserHeader from "../../Account/UserHeader";
import { NavLink } from "react-router-dom";
import styles from "./SurveyResult.module.scss";

export default function SurveyResult() {
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
            <h2>Результаты опроса</h2>
          </NavLink>
          <NavLink to="/surveys/link">
            <h2 className="text-gray-400">Ссылка на опрос</h2>
          </NavLink>
        </div>
      </div>

      <div className={styles.wrap}>
        <h2>Анализ результатов</h2>
        <div className={styles.count}>
          <h3>Число ответов:</h3>
          <h3>Число уникальных пользователей:</h3>
        </div>
        <div className={styles.download}>
          <div className={styles.one}>
            <h3 className={styles.icon_title}>Отдельные ответы</h3>
            <div className={styles.icon}>
              <img src="/images/icons8-csv.png" alt="" />
              <img src="/images/icons8-excel.png" alt="" />
            </div>
          </div>
          <div className={styles.svod}>
            <h3 className={styles.icon_title}>Сводные результаты</h3>
            <div className={styles.icon}>
              <img src="/images/icons8-pdf.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
