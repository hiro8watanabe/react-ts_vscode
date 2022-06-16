import React from "react";
import styled from "styled-components";
import { AboutImgRev } from "../atoms/images/AboutImgRev";

import { AboutTextRev } from "./AboutTextRev";

export const TextWithImgRev = () => {
  return (
    <SInner>
      <AboutTextRev />
      <AboutImgRev />
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
  flex-direction: row-reverse;
`;
