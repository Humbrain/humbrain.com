import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import React, { useState } from "react";
import useForm from "hooks/useForm";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import until from "utils/untils";
import ApplicationsServices from "services/ApplicationsServices";
import Danger from "components/Typography/Danger";

const DomainesUpdate = ({ domaines }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);

  /**
   *
   * @return {Promise<void>}
   */
  const updateDomaines = async () => {
    setIsloading(true);
    const domaines = {
      memo: values.memo.toUpperCase(),
      titre: values.titre,
      version: values.version,
      description: values.description,
      tags: values.tags,
      MOA: values.MOA,
      statut: (values.status ? 1 : 0)
    };
    const [err, result] = await until(ApplicationsServices.update(domaines, values.id));
    if (err) {
      setIsloading(false);
      setError(err.message);
    } else {
      setIsloading(false);
      window.location.reload();
    }
  };
  /**
   *
   */
  const { values, handleChange, handleSubmit } = useForm(updateDomaines, {
    id: domaines.id,
    titre: domaines.titre,
    memo: domaines.memo.toUpperCase(),
    description: domaines.description,
    version: domaines.version,
    tags: domaines.tags,
    MOA: domaines.MOA,
    status: domaines.statut !== 0
  });

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>Modification {domaines.memo.toUpperCase()}
                {error && (<small><Danger>Erreur: {error}</Danger></small>)}
              </h3>
            </GridItem>
          </GridContainer>
          <GridContainer spacing={1}>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="Titre" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "titre",
                             value: values.titre, onChange: handleChange
                           }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="Memo" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "memo",
                             value: values.memo, onChange: handleChange
                           }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="Version" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "version",
                             value: values.version, onChange: handleChange
                           }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="MOA" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "MOA",
                             value: values.MOA, onChange: handleChange
                           }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="tags (séparer par une virgules)" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "tags",
                             value: values.tags, onChange: handleChange
                           }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="Description" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             multiline: true,
                             rows: 5,
                             name: "description",
                             value: values.description, onChange: handleChange
                           }} />
            </GridItem>
          </GridContainer>
        </CardBody>
        <CardFooter>
          <GridContainer>
            <GridItem xs={10} sm={10} md={10}>
              <Button type={"submit"} color={"success"} name={"statut"}
                      disabled={isLoading}>{isLoading ? "Chargement..." : "Validé"}</Button>
            </GridItem>
            <GridItem xs={1} sm={1} md={1}>
              <FormControlLabel
                control={<Checkbox checked={values.status} name={"status"} color={"primary"} onChange={handleChange} />}
                label={"Activé"} />
            </GridItem>
          </GridContainer>
        </CardFooter>
      </Card>
    </form>
  );
};

export default DomainesUpdate;