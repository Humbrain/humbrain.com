/*eslint-disable*/
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
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

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="/#us"
                    color="transparent"
                    className={classes.navLink}
                >
                    Bienvenue
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/#our"
                    color="transparent"
                    className={classes.navLink}
                >
                    Vous
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/#equipe"
                    color="transparent"
                    className={classes.navLink}
                >
                    notre Équipe
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/#carrousel"
                    color="transparent"
                    className={classes.navLink}
                >
                    Nos Projets
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="/#contact"
                    color="transparent"
                    className={classes.navLink}
                >
                   Contact
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="Suivez nous sur twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://twitter.com/humbrain"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"}/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-linkedin"
                    title="Suivez nous sur Linkedin"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.linkedin.com/company/humbrain/about/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-linkedin"}/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
