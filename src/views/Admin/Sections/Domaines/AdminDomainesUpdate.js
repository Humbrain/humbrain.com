import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import React, { useEffect, useState } from "react";
import useForm from "hooks/useForm";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";
import { Checkbox, DialogContent, FormControlLabel, InputLabel, MenuItem, Select } from "@material-ui/core";
import until from "utils/untils";
import ApplicationsServices from "services/ApplicationsServices";
import Danger from "components/Typography/Danger";
import DomainesServices from "services/DomainesServices";

const DomaineUpdate = ({ domaine }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [app, setApp] = useState([]);
  useEffect(() => {
    ApplicationsServices.getAll().then(res => {
      setApp(res.data);
    });
  }, []);
  /**
   *
   * @return {Promise<void>}
   */
  const updateDomaine = async () => {
    setIsloading(true);
    const domaine = {
      application: values.application,
      bdsrv: values.bdsrv,
      protocole: values.protocole,
      memo: values.memo,
      titre: values.titre,
      bdprod: values.bdprod,
      connexion: values.connexion
    };
    const [err, result] = await until(DomainesServices.update(domaine, values.id));
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
  const { values, handleChange, handleSubmit } = useForm(updateDomaine, {
    id: domaine.id,
    application: domaine.application.toString(),
    bdsrv: domaine.bdsrv.toString(),
    protocole: domaine.protocole,
    memo: domaine.memo,
    titre: domaine.titre,
    bdprod: domaine.bdprod,
    connexion: domaine.connexion
  });

  return (
    <form onSubmit={handleSubmit}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h3>Création d'un nouveaux domaine
            {error && (<small><Danger>Erreur: {error}</Danger></small>)}
          </h3>
        </GridItem>
      </GridContainer>
      <GridContainer spacing={1}>
        <GridItem xs={12} sm={12} md={3}>
          <InputLabel id="select-Application">Nom d'Application</InputLabel>
          <Select
            labelId="select-Application"
            id="select-app"
            name={"application"}
            value={values.application}
            onChange={handleChange}
          >
            {app.map(app => (
              <MenuItem key={app.id} value={app.id}>{app.titre}</MenuItem>
            ))}
          </Select>
          {console.log(domaine)}
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InputLabel id="select-protocole">Protocole</InputLabel>
          <Select
            labelId="select-protocole"
            id="select-prot"
            name={"protocole"}
            value={values.protocole}
            onChange={handleChange}
          >
            <MenuItem value={"http://"}>http</MenuItem>
            <MenuItem value={"https://"}>https</MenuItem>
          </Select>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput labelText="Domaine" formControlProps={{
            fullWidth: true
          }}
                       inputProps={{
                         name: "memo",
                         value: values.memo
                         , onChange: handleChange
                       }} />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput labelText="Marque" formControlProps={{
            fullWidth: true
          }}
                       inputProps={{
                         name: "titre",
                         value: values.titre, onChange: handleChange
                       }} />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <InputLabel id="select-bdsrv">Numéro du serveur</InputLabel>
          <Select
            labelId="select-bdsrv"
            id="select-bd"
            name={"bdsrv"}
            value={values.bdsrv}
            onChange={handleChange}
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
          </Select>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <CustomInput labelText="Nom de la BDD" formControlProps={{
            fullWidth: true
          }}
                       inputProps={{
                         name: "bdprod",
                         value: values.bdprod, onChange: handleChange
                       }} />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomInput labelText="Chaine de connexion" formControlProps={{
            fullWidth: true
          }}
                       inputProps={{
                         name: "connexion",
                         value: values.connexion, onChange: handleChange
                       }} />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button type={"submit"} color={"success"} name={"statut"}
                  disabled={isLoading}>{isLoading ? "Chargement..." : "Validé"}</Button>
        </GridItem>
      </GridContainer>
    </form>
  );
};

export default DomaineUpdate;