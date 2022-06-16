import React from "react";
import styled from "styled-components";
import bgImg from "../../images/network-ga91991d8b_1920-min.jpg";
import { MvTitle } from "../molecules/MvTitle";

export const ServiceSection = () => {
  return (
    <SSection>
      <SWrapper>
        <MvTitle />
      </SWrapper>
    </SSection>
  );
};

const SSection = styled.section`
  position: relative;
  background: url(${bgImg}) center center / cover no-repeat fixed;
  width: 100vw;
  height: 650px;

  &::before {
    content: "";
    /* ↓暗いオーバーレイを半透明で配置 */
    background-color: rgba(0, 0, 0, 0.2);
    /* ↓全体を覆うように配置 */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

