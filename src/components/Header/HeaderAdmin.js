/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import {
  AssignmentInd,
  Business, ContactMail,
  Link,
  SupervisedUserCircle
} from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function HeaderAdmin(props) {
  const classes = useStyles();
  const history = useHistory();

  const deco = () => {
    window.localStorage.removeItem("humbrain_admin");
    history.push("/login");
  };
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/admin/#project"
          color="transparent"
          className={classes.navLink}
        >
          Projets
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/admin/#domain"
          color="transparent"
          className={classes.navLink}
        >
          Domaine
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="deco"
          title="Deconnexion"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            onClick={() => deco()}
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-sign-out-alt"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
