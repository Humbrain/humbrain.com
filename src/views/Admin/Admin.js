import React, { useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "components/Footer/Footer.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProjectAdmin from "./Sections/Product/AdminProject";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import Button from "components/CustomButtons/Button";
import DomainesAdmin from "./Sections/Domaines/AdminDomaines";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import Parallax from "../../components/Parallax/Parallax";

const useStyles = makeStyles(styles);

export default function Admin(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const dashboardRoutes = [];
  return (
    <div>
      <div>
        <Header
          color="light"
          routes={dashboardRoutes}
          brand="Humbrain"
          rightLinks={<HeaderAdmin />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "dark"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.webp")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}><span style={{ color: "#709400" }}>HUM</span><span>BRAIN</span>
                </h1>
                <h3>
                  Ressources<br />Technologiques<br />Humaines<br />
                </h3>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 25 + "px" }}>
        <div className={classes.container}>
          <ProjectAdmin />
        </div>
      </div>
      ;
      <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 25 + "px" }}>
        <div className={classes.container}>
          <DomainesAdmin />
        </div>
      </div>;
      <Footer />;
    </div>
  );
}
