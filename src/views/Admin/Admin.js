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

const useStyles = makeStyles(styles);

export default function Admin(props) {
  const history = useHistory();
  const [productOpen, setProductOpen] = useState(true);
  const [domainesOpen, setDomainesOpen] = useState(true);
  const classes = useStyles();
  const { ...rest } = props;
  const deco = () => {
    window.localStorage.removeItem("humbrain_admin");
    history.push("/login");
  };
  return (
    <div>
      <Button color={"danger"} onClick={() => deco()}>Déconnexion</Button>
      <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 25 + "px" }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title} style={{ color: "black" }}>Projet
                <Button justIcon round color="primary" onClick={() => setProductOpen(!productOpen)}>{productOpen ?
                  <KeyboardArrowUp /> : <KeyboardArrowDown />}</Button>
              </h2>
            </GridItem>
          </GridContainer>
          {productOpen && (
            <ProjectAdmin />
          )}
        </div>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: 25 + "px" }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title} style={{ color: "black" }}>Domaines
                <Button justIcon round color="primary" onClick={() => setDomainesOpen(!domainesOpen)}>{domainesOpen ?
                  <KeyboardArrowUp /> : <KeyboardArrowDown />}</Button>
              </h2>
            </GridItem>
          </GridContainer>
          {domainesOpen && (
            <DomainesAdmin />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
