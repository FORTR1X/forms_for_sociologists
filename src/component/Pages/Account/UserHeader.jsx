import React from "react";
import styles from "./UserHeader.module.scss";
import { NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

export default function UserHeader() {
  return (
    <div>
      <div className={styles.header}>
        <NavLink to="/">
          <div className={styles.logo_wrapper}>
            F<span>F</span>
          </div>
        </NavLink>

        <NavLink to="/newTeam">Создать команду</NavLink>
        <NavLink to="/survey">Создать опрос</NavLink>
        <NavLink to="/allTeam">Все команды</NavLink>

        <form action="" method="post" className="form-search"></form>
        <NavLink to="/userSettings">
          <div className={styles.userPanel}><FaUserAlt /></div>
        </NavLink>
      </div>
    </div>
  );
}


