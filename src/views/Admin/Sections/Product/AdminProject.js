import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import style from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Button from "components/CustomButtons/Button";
import { Delete, Edit, PlusOneOutlined } from "@material-ui/icons";
import ApplicationsServices from "services/ApplicationsServices";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { ButtonGroup, Slide } from "@material-ui/core";
import ProjectUpdate from "./AdminProjectUpdate";
import ProjectCreate from "./AdminProjectCreate";
import ProjectDelete from "./AdminProjectDelete";
import Header from "components/Header/Header";
import HeaderAdmin from "components/Header/HeaderAdmin";
import Parallax from "components/Parallax/Parallax";

const styles = {
  ...style
};
const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function ProjectAdmin({ props }) {
  const { ...rest } = props;
  const [allProject, setAllProject] = useState([]);
  const [isOnEdit, setIsOnEdit] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState({ "empty": true });

  /**
   *
   * @param id
   */
  const openEdit = (id) => {
    if (isOnEdit.includes(id)) {
      if (isOnEdit.length === 1) {
        setIsOnEdit([]);
      } else {
        setIsOnEdit(isOpen => isOpen.slice(isOpen.indexOf(id), 1));
      }
    } else {
      setIsOnEdit(isOpen => isOpen.concat(id));
    }
  };

  /**
   *
   */
  useEffect(() => {
    ApplicationsServices.getAll().then(results => {
      if (results.data)
        setAllProject(results.data.reverse());
    });
  }, []);

  const classes = useStyles();
  const dashboardRoutes = [];
  return (
    <div>
      <div className={classes.section} id={"project"}>
        <GridContainer>
          <small><Button onClick={() => setModal(true)}><PlusOneOutlined /> Ajouter un projet</Button></small>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              {allProject.map(project => (
                <GridItem xs={12} sm={12} md={12} key={project.id}>
                  <Card>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={6} sm={6} md={6}>
                          <h2>{project.memo.toUpperCase()} <small>v{project.version || "0.0.0"}</small></h2>
                        </GridItem>
                        <GridItem xs={6} sm={6} md={6}>
                          <ButtonGroup>
                            <Button size={"sm"} color={"success"}
                                    onClick={() => openEdit(project.id)}><Edit /> Edition</Button>
                            <Button size={"sm"} color={"danger"}
                                    onClick={() => setModalDelete(project)}><Delete /> Supprimer</Button>
                          </ButtonGroup>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                  {isOnEdit.includes(project.id) && (
                    <ProjectUpdate project={project} />
                  )}
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
        </GridContainer>
        <ProjectCreate modal={modal} Transition={Transition} onCloseModal={() => setModal(false)} />
        <ProjectDelete modal={modalDelete.empty} Transition={Transition}
                       onCloseModal={() => setModalDelete({ "empty": true })}
                       project={modalDelete} />
      </div>
    </div>
  );
}
