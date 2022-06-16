import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const MvTitle = () => {
  const History = useHistory();
  const onClickContact = () => {
    History.push("/contact");
  };

  return (
    <>
      <STitle>React ✕ TypeScript</STitle>
      <SText>React✕TypeScriptを使用したテストサイトです。</SText>
      <PrimaryButton onClick={onClickContact}>お問い合わせ</PrimaryButton>
    </>
  );
};

const STitle = styled.h1`
  font-size: 72px;
  font-weight: bold;
  color: #fff;
`;

const SText = styled.p`
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 32px;
`;
