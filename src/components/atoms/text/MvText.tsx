import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

export const MvText: FC<Props> = (props) => {
  const { children } = props;
  return <SText>{children}</SText>;
};

const SText = styled.p`
  font-size: 24px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 32px;
`;
