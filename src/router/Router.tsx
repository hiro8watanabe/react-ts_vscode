import { Switch, Route } from "react-router-dom";

import { Home } from "../components/templates/Home";
import { About } from "../components/templates/About";
import { Service } from "../components/templates/Service";
import { Contact } from "../components/templates/Contact";
import { Page404 } from "../components/templates/Page404";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/service">
        <Service />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
