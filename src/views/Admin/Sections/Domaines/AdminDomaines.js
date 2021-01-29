import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import style from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Button from "components/CustomButtons/Button";
import { Delete, Edit, PanoramaFishEye, PlusOneOutlined, ShowChartOutlined, Visibility } from "@material-ui/icons";
import ApplicationsServices from "services/ApplicationsServices";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import { ButtonGroup, Slide } from "@material-ui/core";
import DomainesUpdate from "./AdminDomainesUpdate";
import DomaineCreate from "./AdminDomainesCreate";
import DomaineDelete from "./AdminDomainesDelete";
import DomainesServices from "services/DomainesServices";
import until from "utils/untils";
import DomainShow from "./DomainesShow";

const styles = {
  ...style
};
const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
export default function DomainesAdmin() {
  const [allApplication, setAllApplication] = useState([]);
  const [isShow, setIsShow] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState({ "empty": true });

  /**
   *
   * @param id
   */
  const openShow = (id) => {
    if (isShow.includes(id)) {
      if (isShow.length <= 1) {
        setIsShow([]);
      } else {
        setIsShow(isOpen => isOpen.slice(isOpen.indexOf(id), 1));
      }
    } else {
      setIsShow(isOpen => isOpen.concat(id));
    }
  };

  /**
   *
   */
  useEffect(() => {
    ApplicationsServices.getAll().then(results => {
      if (results.data)
        setAllApplication(results.data);
    });
  }, []);

  const classes = useStyles();

  const domaineInApp = (id) => {
    const [err, result] = until(DomainesServices.getCountByApp(id));
    if (!err) {
      console.log(result);
    }
  };

  return (
    <div className={classes.section}>
      <GridContainer>
        <small><Button onClick={() => setModal(true)}><PlusOneOutlined /> Ajouter un domaine</Button></small>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            {allApplication.map((app) => (
              <GridItem xs={12} sm={12} md={12} key={app.id}>
                <Card>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={6} sm={6} md={6}>
                        <h2>{app.memo.toUpperCase()}</h2>
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                        <Button size={"sm"} color={"success"}
                                onClick={() => openShow(app.id)}><Visibility /> Afficher</Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
                {isShow.includes(app.id) && (
                  <DomainShow appID={app.id} />
                )}
              </GridItem>
            ))}
          </GridContainer>
        </GridItem>
      </GridContainer>
      <DomaineCreate modal={modal} Transition={Transition} onCloseModal={() => setModal(false)} />
      {/*      <DomaineDelete modal={modalDelete.empty} Transition={Transition}
                     onCloseModal={() => setModalDelete({ "empty": true })}
                     domaines={modalDelete} />*/}
    </div>
  );
}
