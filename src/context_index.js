import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Home from "./Components/Home";
import AddEmployees from "./Components/AddEmployees";
import EditEmployees from "./Components/EditEmployees";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./Store/Globalstate";

const App = () => {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={AddEmployees} exact />
        <Route path="/add" component={AddEmployees} exact />
        <Route path="/edit:id" component={EditEmployees} exact />
      </Switch>
    </GlobalProvider>
  );
};

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
