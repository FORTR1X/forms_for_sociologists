import React from "react";
import styles from "./Template.module.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import { Style } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Template() {
  return (
    <div className={styles.template_section}>
      <div className={styles.template_top}>
        <div className={styles.template_left}>
          <span style={{ fontSize: "16px", color: "#202124" }}>
            Создать новую форму
          </span>
        </div>
        <div className={styles.template_right}>
          <div className={styles.gallery_button}>
            Просмотр опросов
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className={styles.template_body}>
        <NavLink
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/newForm"
        >
          <div className={styles.card}>
            <img
              src={"../../../../..//images/yellow.jpg"}
              alt="no image"
              className={styles.card_image}
            />
            <p className={styles.card_title}>Бланк</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
