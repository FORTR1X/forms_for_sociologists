import React from "react";
import styles from "..//Account/User.module.scss";
import UserHeader from "../Account/UserHeader";
import UserSurvey from "../Account/UserSurvey";
import SurveyHomeCard from "./SurveyHomeCard.jsx";

export default function SurveyHome() {
  return (
    <div className={styles.wrapper}>
      <UserHeader />
      <div className={styles.survey}>
        <SurveyHomeCard />
      </div>
      <div className={styles.survey}>
        <UserSurvey />
      </div>
    </div>
  );
}
