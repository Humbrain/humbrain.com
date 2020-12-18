import React from "react";
import Carousel from "react-slick";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/projet/annuaire.png";
import image2 from "assets/img/projet/evalio.png";
import image3 from "assets/img/projet/monagenda.png";
import image4 from "assets/img/projet/igoa.png";
import {makeStyles} from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);
export default function OurProject() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className={classes.section} id={"carrousel"}>
            <h2 className={classes.title}>Nos Projets</h2>
            <Button color={"primary"} variant={"contained"} href={"/projects"}> Tout nos projets</Button>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <Carousel {...settings}>
                            <div>
                                <img
                                    src={image1}
                                    alt="First slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <Button color={"primary"} variant={"contained"}> <i className="fas fa-play"/> En
                                            savoir plus</Button>
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image2}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <Button color={"primary"} variant={"contained"}> <i className="fas fa-play"/> En
                                            savoir plus</Button>
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image3}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <Button color={"primary"} variant={"contained"}> <i className="fas fa-play"/> En
                                            savoir plus</Button>
                                    </h4>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={image4}
                                    alt="Second slide"
                                    className="slick-image"
                                />
                                <div className="slick-caption">
                                    <h4>
                                        <Button color={"primary"} variant={"contained"}> <i className="fas fa-play"/> En
                                            savoir plus</Button>
                                    </h4>
                                </div>
                            </div>
                        </Carousel>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}