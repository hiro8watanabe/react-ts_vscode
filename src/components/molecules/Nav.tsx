import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <nav>
        <SNavLists>
          <SList>
            <SLink to="/">HOME</SLink>
          </SList>
          <SList>
            <SLink to="/about">ABOUT</SLink>
          </SList>
          <SList>
            <SLink to="/service">SERVICE</SLink>
          </SList>
          <SList>
            <SLink to="/contact">CONTACT</SLink>
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
const SLink = styled(Link)`
  font-weight: bold;
  &:hover {
    opacity: 0.7;
  }
`;
