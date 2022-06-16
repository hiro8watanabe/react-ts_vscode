import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Page404Test = () => {
  const History = useHistory();
  const onClickContact = () => {
    History.push("/contact");
  };

  return (
    <>
      <STitle>404ページ</STitle>
      <SText>ここはPage404コンポーネントです。</SText>
      <PrimaryButton onClick={onClickContact}>お問い合わせ</PrimaryButton>
    </>
  );
};

const STitle = styled.h1`
  font-size: 72px;
  font-weight: bold;
  color: #fff;
  z-index: 1;
`;

const SText = styled.p`
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 32px;
  z-index:1;
`;
