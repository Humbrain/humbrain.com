import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { useParams } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import ProductSectionSingle from "./Sections/ProductSectionSingle";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProjectPages(props) {
  const { id } = useParams();
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Humbrain"
        rightLinks={<HeaderLinks />}
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {id === undefined
            ? (
              <ProductSection />
            ) : <ProductSectionSingle id={id} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
