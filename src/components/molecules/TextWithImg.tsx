import React from "react";
import styled from "styled-components";
import { AboutImg } from "../atoms/images/AboutImg";
import { AboutText } from "./AboutText";

export const TextWithImg = () => {
  return (
    <SInner>
      <AboutText />
      <AboutImg />
    </SInner>
  );
};

const SInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
