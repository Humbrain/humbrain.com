import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import React, { useEffect, useState } from "react";
import useForm from "hooks/useForm";
import Button from "components/CustomButtons/Button";
import { Checkbox, Dialog, DialogContent, InputLabel, MenuItem, Select } from "@material-ui/core";
import until from "utils/untils";
import ApplicationsServices from "services/ApplicationsServices";
import Danger from "components/Typography/Danger";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DomainesServices from "services/DomainesServices";

const useStyles = makeStyles(modalStyle);

const DomainesCreate = ({ modal, Transition, onCloseModal }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [app, setApp] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    ApplicationsServices.getAll().then(res => {
      setApp(res.data);
    });
  }, []);

  /**
   *
   * @return {Promise<void>}
   */
  const createDomaines = async () => {
    setIsloading(true);
    const domaines = {
      memo: values.memo,
      titre: values.titre.toUpperCase(),
      application: values.application,
      bdsrv: values.bdsrv,
      bdprod: values.bdprod,
      protocole: values.protocole,
      connexion: values.connexion
    };
    const [err, result] = await until(DomainesServices.create(domaines));
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
  const { values, handleChange, handleSubmit } = useForm(createDomaines, {
    application: "",
    bdsrv: "",
    protocole: "",
    memo: "",
    titre: "",
    bdprod: "",
    connexion: ""
  });

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={modal}
      TransitionComponent={Transition}
      keepMounted
      onClose={onCloseModal}
      aria-describedby="modal-slide-description"
    >
      <DialogContent
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <form onSubmit={handleSubmit}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>Création d'un nouveaux domaine
                {error && (<small><Danger>Erreur: {error}</Danger></small>)}
              </h3>
            </GridItem>
          </GridContainer>
          <GridContainer spacing={1}>
            <GridItem xs={12} sm={12} md={6}>
              <InputLabel id="select-Application">Application</InputLabel>
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
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InputLabel id="select-bdsrv">BD Serve</InputLabel>
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
            <GridItem xs={12} sm={12} md={6}>
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
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="MOA" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "memo",
                             value: values.memo
                             , onChange: handleChange
                           }} />
            </GridItem>
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
              <CustomInput labelText="BD Prod" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "bdprod",
                             value: values.bdprod, onChange: handleChange
                           }} />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput labelText="Connexion" formControlProps={{
                fullWidth: true
              }}
                           inputProps={{
                             name: "connexion",
                             value: values.connexion, onChange: handleChange
                           }} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={10} sm={10} md={10}>
              <Button type={"submit"} color={"success"} name={"statut"}
                      disabled={isLoading}>{isLoading ? "Chargement..." : "Validé"}</Button>
            </GridItem>
          </GridContainer>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DomainesCreate;