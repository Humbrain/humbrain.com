import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import style from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import ApplicationsServices from "services/ApplicationsServices";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";
import Badge from "components/Badge/Badge";
import { cardTitle, cardLink, cardSubtitle } from "assets/jss/material-kit-react.js";
import Button from "components/CustomButtons/Button";

const styles = {
  ...style,
  cardTitle,
  cardLink,
  cardSubtitle
};
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    ApplicationsServices.getAll().then(results => {
      if (results.data)
        setProjects(results.data);
    });
  }, []);

  return (
    <div className={classes.section} id={"us"}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Nos projets</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        {projects.map(p => (
          <>
            {p.statut === 1 && (
              <GridItem xs={12} sm={12} md={4} key={p.id}>
                <Card>
                  <CardBody style={{ textAlign: "justify" }}>
                    <h4 className={classes.cardTitle}>{p.titre}</h4>
                    <h6 className={classes.cardSubtitle}
                        style={{ paddingBottom: 10 }}>{p.tags !== null && p.tags.split(",").map(tags => (
                      <Badge color={"rose"}>{tags}</Badge>))}</h6>
                    <p style={{ lineHeight: 1.2 + "rem" }}>
                      {p.description || "Aucune description pour le moments"}
                    </p>
                  </CardBody>
                  <CardFooter><Button size={"sm"} color={"github"} href={`/projects/${p.id}`}>En Savoir
                    Plus</Button></CardFooter>
                </Card>
              </GridItem>
            )}
          </>
        ))}
      </GridContainer>
    </div>
  );
}
