import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <SHeaderInner>
        <SLogoBox>
          <SLogo src="./logo192.png" alt="" />
          <STitle>React✕TypeScript</STitle>
        </SLogoBox>
        <nav>
          <SNavLists>
            <SList>
              <SLink href="/">HOME</SLink>
            </SList>
            <SList>
              <SLink href="/about">ABOUT</SLink>
            </SList>
            <SList>
              <SLink href="/service">SERVICE</SLink>
            </SList>
            <SList>
              <SLink href="/contact">CONTACT</SLink>
            </SList>
          </SNavLists>
        </nav>
      </SHeaderInner>
    </SHeader>
  );
};

const SHeader = styled.header`
  width: 100%;
  background-color: Gray;
`;
const SHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 980px;
  padding: 20px;
`;
const SLogoBox = styled.div`
  display: flex;
  align-items: center;
`;
const SLogo = styled.img`
  width: 60px;
`;
const STitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 12px;
`;
const SNavLists = styled.ul`
  display: flex;
`;
const SList = styled.li`
  margin-left: 12px;
`;
const SLink = styled.a`
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
`;
