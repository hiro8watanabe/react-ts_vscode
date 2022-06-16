import React from "react";
import { BrowserRouter } from "react-router-dom";
import { BaseButton } from "./components/atoms/button/BaseButton";
import { ColorfulMassage } from "./components/ColorfulMassage";
import { Header } from "./components/organisms/Header";
import { Router } from "./router/Router";
import styled from "styled-components";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <h1 style={{ color: "red" }}>TEST Project</h1>
      <ColorfulMassage color="pink" fontSize="18px">
        Hello World!!
      </ColorfulMassage>
      <ColorfulMassage color="blue" fontSize="24px">
        Hello React!!
      </ColorfulMassage>
      <button style={{ cursor: "pointer" }} onClick={onClickButton}>
        Button
      </button>
      <SButton onClick={onClickButton}>button</SButton>
    </>
  );
};

const SButton = styled(BaseButton)`
  background-color: #ff2020;
`;
