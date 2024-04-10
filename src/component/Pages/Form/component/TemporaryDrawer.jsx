import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

export default function TemporaryDrawer() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }}>
      <List style={{marginLeft:"08px", marginRight:"08px", marginTop:"15px"}}> 
        <ListItem>Form Form</ListItem>
        <ListItem>
          <FiSettings />
          <div style={{marginLeft:"20px", fontSize:"14px"}}>Settings</div>
        </ListItem>
        <ListItem>
          <BsQuestionCircle />
          <div style={{marginLeft:"20px", fontSize:"14px", fontWeight:"500", color:"grey"}}>Help</div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
