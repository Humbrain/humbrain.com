import React, { useState } from "react";
import Button from "components/CustomButtons/Button";
import { Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import until from "utils/untils";
import ApplicationsServices from "services/ApplicationsServices";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(modalStyle);

const DomaineDelete = ({ modal, Transition, onCloseModal, domaine }) => {
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const classes = useStyles();

  /**
   *
   * @return {Promise<void>}
   */
  const deleteDomaine = async (id) => {
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
        <h3>Voulez vous vraiment supprimez {domaine.memo}</h3>
      </DialogTitle>
      <DialogActions
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <Button onClick={onCloseModal}>Annuler</Button>
        <Button color={"danger"} onClick={() => deleteDomaine(domaine.id)}>Supprimer</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DomaineDelete;