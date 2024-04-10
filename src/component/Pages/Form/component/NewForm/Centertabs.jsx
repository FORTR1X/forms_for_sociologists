import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "green",
    textTransform: "capitalize",
    height: 10,
  },
  tabs: {
    height: 10,
  },
});

export default function Centertabs() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab className={classes.tab} label="Вопросы">
          Вопросы
        </Tab>
        <Tab className={classes.tab} label="Ответы">
          Ответы
        </Tab>
        <Tab className={classes.tab} label="Настройки">
          Настройки
        </Tab>
        <Tab className={classes.tab} label="Ссылка на опрос">
          Ссылка на опрос
        </Tab>
      </Tabs>
    </Paper>
  );
}
