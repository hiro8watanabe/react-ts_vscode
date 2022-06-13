import { FC } from "react";

export const ColorfulMassage: FC<any> = (props) => {
  const { color, fontSize, children } = props;
  const contentLadyStyle: object = {
    color: color,
    fontSize: fontSize,
  };

  return <p style={contentLadyStyle}>{children}</p>;
};
