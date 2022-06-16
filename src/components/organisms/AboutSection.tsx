import React from "react";
import styled from "styled-components";
import { TextWithImg } from "../molecules/homeAboutSec/TextWithImg";
import { TextWithImgRev } from "../molecules/homeAboutSec/TextWithImgRev";

export const AboutSection = () => {
  return (
    <SAboutContainer>
      <TextWithImg />
      <TextWithImgRev />
    </SAboutContainer>
  );
};

const SAboutContainer = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #e2e2e2;
`;
