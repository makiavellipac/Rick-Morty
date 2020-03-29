import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Characters from "./pages/Characters";
import Detail from "./pages/Detail";
import NavBar from "./components/NavBar";


const Router = () => (
  <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={Characters}/>
      <Route exact path="chararcters/:itemId" component={Detail}/>
      <Route component={NotFound}/>
    </Switch>
  </>
);

export default Router;