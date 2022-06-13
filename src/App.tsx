import React from "react";
import { ColorfulMassage } from "./components/ColorfulMassage";

export const App = () => {
  const onClickButton = () => alert();

  return (
    <>
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
