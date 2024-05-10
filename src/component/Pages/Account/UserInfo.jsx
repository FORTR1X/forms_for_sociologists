import React from "react";
import styles from "./UserInfo.module.scss";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";

const info = [
  {
    id: "0",
    name: "Татьяна Андреевна Здоровило",
    img: `..//images/15.jpg`,
    email: `zdorovilo.tanya@mail.ru`,
    data: `15.02.2024`,
  },
];

export default function UserInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.team_item}>
        <a href="" className={styles.team_image}>
          <img src="./../../../..//images/15.jpg" alt="" className="" />
          <CiEdit className={styles.edit_foto} />
          <FaTrash className={styles.delete_foto} />
        </a>
        <div className={styles.team_text}>
          <div className={styles.info}>
            {info.map((p) => (
              <>
                <h3>{p.name}</h3>
                <div className={styles.info_email}>{p.email}</div>
                <div className={styles.data_info}>
                  <h4>Дата регистрации</h4>
                  <div className={styles.info_email}>{p.data}</div>
                </div>
              </>
            ))}
          </div>
          <NavLink to="/userSettings">
            <IoSettingsSharp className={styles.edit_info} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
