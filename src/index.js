import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ProtectRoute from "components/ProtectRoute";
import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import ProjectPages from "views/ProjectPages/ProjectPages";
import Admin from "views/Admin/Admin";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/projects" component={ProjectPages} />
      <Route exact path="/projects/:id" component={ProjectPages} />
      <ProtectRoute path={"/admin"} component={Admin} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
