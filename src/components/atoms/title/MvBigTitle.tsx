import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

export const MvBigTitle: FC<Props> = (props) => {
  const { children } = props;
  return <STitle>{children}</STitle>;
};

const STitle = styled.h1`
  font-size: 72px;
  font-weight: bold;
  color: #fff;
`;
