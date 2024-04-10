import React from "react";
import styles from "./NewForm.module.scss";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import { IoMdFolderOpen } from "react-icons/io";

import ColorLensIcon from "@material-ui/icons/ColorLens";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Centertabs from "./Centertabs";
import QuestionForm from "./QuestionForm";

export default function NewForm() {
  return (
    <>
      <div className={styles.form_header}>
        <div className={styles.form_header_left}>
          <span>FORMFORM</span>
          <input
            type="text"
            placeholder="Название"
            className={styles.form_name}
          />
          <IoMdFolderOpen
            className={styles.form_header_icon}
            style={{ marginRight: "10px" }}
          ></IoMdFolderOpen>
          <FiStar
            className={styles.form_header_icon}
            style={{ marginRight: "10px" }}
          />
          <span>надо бы это все сохранять</span>
        </div>
        <div className={styles.form_header_right}>
          {/* <IconButton> */}
          <IconButton>
            <ColorLensIcon size="small" className={styles.form_header_icon} />
          </IconButton>
          <IconButton>
            <AiOutlineEye className={styles.form_header_icon} />
          </IconButton>
          <IconButton>
            <FiSettings className={styles.form_header_icon} />
          </IconButton>

          <Button variant="contained" color="primary" href="#contained-buttons">
            Отправить
          </Button>

          <IconButton>
            <MoreVertIcon className={styles.form_header_icon} />
          </IconButton>
          <IconButton>
            <Avatar style={{ height: "30px", width: "30px" }} />
          </IconButton>
          {/* </IconButton> */}
        </div>
      </div>
      <Centertabs />
      <QuestionForm/>
    </>
  );
}
