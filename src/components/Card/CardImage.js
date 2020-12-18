import React from "react";
// material-ui components
import {makeStyles} from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import {cardTitle} from "assets/jss/material-kit-react.js";
import Badge from "../Badge/Badge";
import CardFooter from "./CardFooter";

const styles = {
    ...imagesStyles,
    cardTitle,
};

const useStyles = makeStyles(styles);
const randomColor = () => {
    const color = ["primary", "danger", "info", "warning"]
    return color[Math.floor(Math.random() * color.length)];
}
export default function CardsImage({title, tags, content, action, img}) {
    const classes = useStyles();
    return (
        <Card style={{width: "20rem"}}>
            <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={img}
                alt={title}
            />
            <CardBody>
                <h4 className={classes.cardTitle}>
                    {title}
                </h4>
                <p>{content}</p>
                <Button color="primary" href={"/projects/" + action}>Voir Plus</Button>
            </CardBody>
            <CardFooter>
                {tags !== undefined && tags.length > 0 &&
                <small>{tags.map(tag => (
                    <Badge color={randomColor()}>{tag}</Badge>
                ))}</small>
                }

            </CardFooter>
        </Card>
    );
}