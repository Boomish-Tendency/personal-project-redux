import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Auth from "./Components/Auth";
import Profile from "./Components/Profile";
import Wishlist from "./Components/Wishlist";
import Logout from "./Components/Logout";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dash/" component={Dashboard} />
    <Route path="/profile/:userId" component={Profile} />
    <Route path="/wishlist/:userId" component={Wishlist} />
    <Route path="/logout" component={Logout} />
  </Switch>
);
