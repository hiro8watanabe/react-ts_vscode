import { Switch, Route } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Service } from "../components/pages/Service";
import { Contact } from "../components/pages/Contact";
import { Page404 } from "../components/pages/Page404";

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
