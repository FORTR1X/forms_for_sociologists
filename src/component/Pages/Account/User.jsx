import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./User.module.scss";
import UserHeader from "./UserHeader";
import Team from "./Team";
import UserSurvey from "./UserSurvey";
import UserInfo from "./UserInfo";

export default function User() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />
      <UserInfo />
      <div className={styles.team}>
        <Team />
      </div>
      <div className={styles.survey}>
        <UserSurvey />
      </div>
    </div>
  );
}
