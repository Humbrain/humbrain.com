import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section} id={"us"}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Bienvenue chez nous</h2>
                    <h5 className={classes.description} style={{textAlign: "justify"}}>
                        Entreprise de Services du Numérique.
                        C'est ainsi que nous défini le secteur. Cela couvre plusieurs domaines :

                        <li> l'accompagnement de vos équipes et de vos dirigeants dans les réflexions "SI"</li>
                        <li> la conception et la réalisation d'applications logicielles pour l'entreprise;</li>
                        <li> la création et l'exploitation de services en ligne à valeur ajoutée.</li>
                        Pour faire plus ample connaissance et découvrir ce que nous pouvons pour vous, suivez le guide !
                    </h5>
                </GridItem>
            </GridContainer>
        </div>
    );
}
