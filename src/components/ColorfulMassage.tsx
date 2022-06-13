import { FC, ReactNode } from "react";

type Props = {
  color: string;
  fontSize: string;
  children: ReactNode;
};

export const ColorfulMassage: FC<Props> = (props) => {
  const { color, fontSize, children } = props;
  const contentLadyStyle: object = {
    color: color,
    fontSize: fontSize,
  };

  return <p style={contentLadyStyle}>{children}</p>;
};
