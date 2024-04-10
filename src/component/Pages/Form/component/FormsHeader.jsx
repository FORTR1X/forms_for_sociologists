import React from "react";
import styles from "./FormsHeader.module.scss";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import TemporaryDrawer from "./TemporaryDrawer";

export default function FormsHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.header_info}>
        <TemporaryDrawer />
        <div className={styles.info}>FF</div>
      </div>
      <div className={styles.header_search}>
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" name="search" placeholder="search" />
      </div>
      <div className={styles.header_right}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Avatar src="" />
        </IconButton>
      </div>
    </div>
  );
}
