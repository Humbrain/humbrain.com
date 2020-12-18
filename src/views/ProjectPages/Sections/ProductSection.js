import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import CardsImage from "components/Card/CardImage";
import image1 from "assets/img/projet/annuaire.png"

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section} id={"us"}>
            <GridContainer justify="center">
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Nos projets</h2>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <CardsImage title={"Annuaire Equestre"}
                                content={"Un annuaire incontournable du monde équestre, avec plus de 13 000 " +
                                "professionnels inscrits dans 532 activités autour de l'équitation et du milieu du" +
                                " cheval."}
                                img={image1}
                                action={"annuaire"}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CardsImage title={"Annuaire Equestre"}
                                content={"Un annuaire incontournable du monde équestre, avec plus de 13 000 " +
                                "professionnels inscrits dans 532 activités autour de l'équitation et du milieu du" +
                                " cheval."}
                                img={image1}
                                action={"annuaire"}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CardsImage title={"Annuaire Equestre"}
                                content={"Un annuaire incontournable du monde équestre, avec plus de 13 000 " +
                                "professionnels inscrits dans 532 activités autour de l'équitation et du milieu du" +
                                " cheval."}
                                img={image1}
                                action={"annuaire"}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <CardsImage title={"Annuaire Equestre"}
                                tags={["test", "test2"]}
                                content={"Un annuaire incontournable du monde équestre, avec plus de 13 000 " +
                                "professionnels inscrits dans 532 activités autour de l'équitation et du milieu du" +
                                " cheval."}
                                img={image1}
                                action={"annuaire"}
                    />
                </GridItem>
            </GridContainer>
        </div>
    );
}
