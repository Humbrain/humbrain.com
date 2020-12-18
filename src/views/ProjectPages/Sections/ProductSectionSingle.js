import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import ApplicationsServices from "services/ApplicationsServices";
import NavPills from "components/NavPills/NavPills";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import Badge from "components/Badge/Badge";
import Muted from "../../../components/Typography/Muted";
import Button from "../../../components/CustomButtons/Button";

const useStyles = makeStyles(styles);

export default function ProductSectionSingle(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [project, setProject] = useState({});

  useEffect(() => {
    ApplicationsServices.getOne(props.id).then(results => {
      if (results.data)
        setProject(results.data);
    });
  }, []);

  return (<div className={classes.section} id={"us"}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>{project.titre}</h2>
          <Muted>{project.description}</Muted>
          <p>{project.tags !== undefined && project.tags.split(",").map(tags => (
            <Badge>{tags}</Badge>
          ))}</p>
        </GridItem>
        <GridItem cs={12} sm={12} md={8} style={{ color: "black" }}>
          <NavPills
            color="primary"
            tabs={[
              {
                tabButton: "Fiche Technique",
                tabContent: (
                  <>
                    <Card><CardBody style={{ textAlign: "left" }}><h4><b>Création:</b></h4>
                      <h5>{project.dcrea === undefined || project.dcrea === null ? "Inconnue" : project.dcrea.split("-").reverse().join("/")}</h5>
                    </CardBody></Card>
                    <Card><CardBody style={{ textAlign: "left" }}><h4><b>Version:</b></h4><h5>{project.version}</h5>
                    </CardBody></Card>
                    <Card><CardBody style={{ textAlign: "left" }}><h4><b>Maîtrise d'ouvrage:</b></h4>
                      <h5>{project.MOA}</h5></CardBody></Card>
                  </>
                )
              }
            ]}
          />
        </GridItem>
        <GridItem cs={12} sm={12} md={12} style={{ textAlign: "left" }}>
          <Button size={"sm"} href={"/projects"} color={"primary"}>Retour à la liste </Button>
        </GridItem>
      </GridContainer>
    </div>
  );
}
