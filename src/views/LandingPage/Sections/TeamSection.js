import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/laurent.jpg";
import team2 from "assets/img/faces/paul.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section} id={"equipe"}>
      <h2 className={classes.title}>Notre équipe</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="laurent Tedesco" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Laurent Tedesco
                <br />
                <small className={classes.smallTitle}>CEO / CTO</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="paul Tedesco" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Paul Tedesco
                <br />
                <small className={classes.smallTitle}>Developpeur</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
