import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import style from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import DomainesUpdate from "./AdminDomainesUpdate";
import DomainesServices from "../../../../services/DomainesServices";

const styles = {
  ...style
};
const useStyles = makeStyles(styles);
export default function DomainShow({ appID }) {
  const [isShow, setIsShow] = useState([]);
  const [domain, setDomains] = useState([]);
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
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
          {isShow.includes(dom.id) && (
            <DomainesUpdate domaines={dom} />
          )}
        </GridItem>
      ))}
    </>
  );
}
