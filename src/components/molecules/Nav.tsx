import styled from "styled-components";

export const Nav = () => {
  return (
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
  );
};

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
