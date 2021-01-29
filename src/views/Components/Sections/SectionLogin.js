import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import md5 from "crypto-js/md5";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import useForm from "hooks/useForm";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  const history = useHistory();
  const login = () => {
    console.log(values.password);
    window.localStorage.setItem("humbrain_admin", md5(values.password).toString());
    history.push("/admin");

  };
  const { values, handleChange, handleSubmit } = useForm(login, {
    password: ""
  });
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form} onSubmit={handleSubmit}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                </CardHeader>
                <CardBody>
                  <CustomInput
                    labelText="Password"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "password",
                      type: "password",
                      value: values.password,
                      onChange: handleChange,
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button type={"submit"} simple color="primary" size="lg">
                    Connexion
                  </Button>
                  <Button onClick={() => history.push("/")} simple color="primary" size="lg">
                    retourn au site
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
