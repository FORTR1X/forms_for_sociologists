import React from "react";
import styles from "./Mainbody.module.scss";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Mainbody() {
  return (
    <div className={styles.main_body}>
      <div className={styles.mainbody_top}>
        <div className={styles.mainbody_top_left}>Недавние формы</div>
        <div className={styles.mainbody_top_right}></div>
        <div className={styles.mainbody_top_center}>
          Фильтр кем сделано
          <ArrowDropDownIcon />
          <IconButton>
            <StorageIcon style={{ color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div className={styles.mainbody_docs}>
        <div className={styles.doc_card}>
          <img src={"..//..//..//..//..//images/pink.jpg"} alt="" className={styles.doc_image} />
          <div className={styles.dov_card_content}>
            <h5>Название опроса</h5>
            <div className={styles.doc_content}>
              <div className={styles.content_left}>
                <StorageIcon
                  style={{
                    color: "white",
                    background: "#6E2594",
                    padding: "3px",
                    marginRight: "3px",
                  }}
                />
              </div>
              <MoreVertIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
