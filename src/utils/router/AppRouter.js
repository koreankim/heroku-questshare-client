import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../components/home/Home"
import Error from "../../components/error/Error"
import Form from "../../components/form/Form";

export const appRouter = () => {
  return (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/questions/:uuid" component={Form}/>
    <Route component={Error} />
  </Switch>
  );
};
