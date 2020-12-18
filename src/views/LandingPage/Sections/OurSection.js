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
import {Create, ThumbUp} from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function OurSection() {
    const classes = useStyles();
    return (
        <div className={classes.section} id={"our"}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Qu'attendez-vous de nous ?</h2>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Reflexion ?"
                            description="Il est difficile de dire ce que l'on attend de l'autre. Dans sa vie privée, comme dans l'entreprise, c'est une réalité. Chez HUMBRAIN, nous avons des oreilles pour écouter et un cerveau pour réfléchir, c'est un bon début non ?."
                            icon={Chat}
                            iconColor="info"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Action ?"
                            description="Penser, c'est bien, agir c'est mieux. Chic, chez HUMBRAIN, on a un cerveau mais aussi dix doigts, et même des dizaines si nécessaire. C'est très utile pour taper sur nos claviers la partition que vous attendez."
                            icon={Create}
                            iconColor="success"
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title="Réaction ?"
                            description="Qu'il soit stratégique, tactique ou opérationnel, un vrai choix est rarement facile. PGI ou non ?, SAAS ou traditionnel ? Avant de finir comme l'Ane de Buridan, qui mourru de ne pas choisir, consultez-nous !"
                            icon={ThumbUp}
                            iconColor="danger"
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
