import styled from "styled-components";

export const Logo = () => {
  return (
    <SLogoBox>
      <SLogo src="./logo192.png" alt="" />
      <STitle>React✕TypeScript</STitle>
    </SLogoBox>
  );
};

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
