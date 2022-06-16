import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: #333;
  color: #fff;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;
  transition: 0.7s;
  z-index: 1;
  text-align: center;
  min-width: 200px;

  &:hover {
    opacity: 0.8;
  }
`;
