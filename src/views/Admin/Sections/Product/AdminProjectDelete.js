import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomInput from "components/CustomInput/CustomInput";
import React, { useState } from "react";
import useForm from "hooks/useForm";
import CardFooter from "components/Card/CardFooter";
import Button from "components/CustomButtons/Button";
import { Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel } from "@material-ui/core";
import until from "utils/untils";
import ApplicationsServices from "services/ApplicationsServices";
import Danger from "components/Typography/Danger";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(modalStyle);

const ProjectDelete = ({ modal, Transition, onCloseModal, project }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const classes = useStyles();

  /**
   *
   * @return {Promise<void>}
   */
  const deleteProject = async (id) => {
    setIsloading(true);
    const [err, result] = await until(ApplicationsServices.delete(id));
    if (err) {
      setIsloading(false);
      setError(err.message);
    } else {
      setIsloading(false);
      window.location.reload();
    }
  };

  return (
    <Dialog
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={!modal}
      TransitionComponent={Transition}
      keepMounted
      onClose={onCloseModal}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle>
        <h3>Voulez vous vraiment supprimez {project.titre}</h3>
      </DialogTitle>
      <DialogActions
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <Button onClick={onCloseModal}>Annuler</Button>
        <Button color={"danger"} onClick={() => deleteProject(project.id)}>Supprimer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectDelete;