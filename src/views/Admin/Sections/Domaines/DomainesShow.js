import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import style from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import DomainesUpdate from "./AdminDomainesUpdate";
import DomainesServices from "services/DomainesServices";
import { ButtonGroup } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import { Delete, Edit } from "@material-ui/icons";
import { Transition } from "react-transition-group";
import DomaineDelete from "./AdminDomainesDelete";

const styles = {
  ...style
};
const useStyles = makeStyles(styles);
export default function DomainShow({ appID }) {
  const [isOnEdit, setIsOnEdit] = useState([]);
  const [domain, setDomains] = useState([]);
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
  useEffect(() => {
    DomainesServices.getOneByApp(appID).then(result => {
      setDomains(result.data);
    });
  }, []);

  const classes = useStyles();

  return (
    <>
      {domain.map((dom) => (
        <GridItem xs={12} sm={12} md={12} key={dom.id}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                  <h4>{dom.protocole}{dom.memo}</h4>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                  <ButtonGroup>
                    <Button size={"sm"} color={"success"}
                            onClick={() => openEdit(dom.id)}><Edit /> Edition</Button>
                    <Button size={"sm"} color={"danger"}
                            onClick={() => setModalDelete(dom)}><Delete /> Supprimer</Button>
                  </ButtonGroup>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
          {isOnEdit.includes(dom.id) && (
            <DomainesUpdate domaine={dom} />
          )}
        </GridItem>
      ))}
      <DomaineDelete modal={modalDelete.empty} Transition={Transition}
                     onCloseModal={() => setModalDelete({ "empty": true })}
                     domaine={modalDelete} />
    </>
  );
}
