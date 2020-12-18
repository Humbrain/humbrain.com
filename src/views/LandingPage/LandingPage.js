import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import OurSection from "./Sections/OurSection";
import OurProject from "./Sections/OurProject";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const classes = useStyles();
    const {...rest} = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Humbrain"
                rightLinks={<HeaderLinks/>}
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
                            <h1 className={classes.title}><span style={{color: '#709400'}}>HUM</span><span>BRAIN</span>
                            </h1>
                            <h3>
                                Ressources<br/>Technologiques<br/>Humaines<br/>
                            </h3>
                            <br/>
                            <Button
                                color="primary"
                                size="lg"
                                href="#us"
                                rel="noopener noreferrer"
                            >
                                <i className="fas fa-play"/>
                                Nous découvrir
                            </Button>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection/>
                    <OurSection/>
                    <TeamSection/>
                    <OurProject/>
                    <WorkSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
