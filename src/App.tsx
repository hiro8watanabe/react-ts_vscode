import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ColorfulMassage } from "./components/ColorfulMassage";
import { Header } from "./components/Header";
// import { Home } from "./components/templates/Home";
// import { About } from "./components/templates/About";
import { Router } from "./router/Router";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <BrowserRouter>
        <Header />
        <br />
        <Router />
      </BrowserRouter>

      <h1 style={{ color: "red" }}>TEST Project</h1>
      <ColorfulMassage color="pink" fontSize="18px">
        Hello World!!
      </ColorfulMassage>
      <ColorfulMassage color="blue" fontSize="24px">
        Hello React!!
      </ColorfulMassage>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};
