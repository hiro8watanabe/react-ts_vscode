import React from "react";
import styled from "styled-components";
import { Logo } from "../molecules/Logo";
import { Nav } from "../molecules/Nav";

export const Header = () => {
  return (
    <SHeader>
      <SHeaderInner>
        <Logo />
        <Nav />
      </SHeaderInner>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  background-color: #c0c0c0;
  z-index: 50;
`;
const SHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 980px;
  padding: 20px;
`;
