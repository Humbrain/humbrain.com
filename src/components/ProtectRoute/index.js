import React from "react";

import md5 from "crypto-js/md5";
import { Route } from "react-router-dom";

const ProtectRoute = ({ path, component }) => {
  if (window.localStorage.getItem("humbrain_admin") === md5("Myszkowski98").toString()) {
    return <Route exact path={path} component={component} />;
  } else {
    window.location.href = "/login";
  }
};

export default ProtectRoute;