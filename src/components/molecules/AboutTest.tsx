import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const AboutTest = () => {
  const History = useHistory();
  const onClickContact = () => {
    History.push("/contact");
  };

  return (
    <>
      <STitle>Aboutページ</STitle>
      <SText>ここはAboutコンポーネントです。</SText>
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
