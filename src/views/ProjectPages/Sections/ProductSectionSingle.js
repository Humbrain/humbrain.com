import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Parallax from "components/Parallax/Parallax";
import ProductSection from "./ProductSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProductSectionSingle(props) {
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
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
