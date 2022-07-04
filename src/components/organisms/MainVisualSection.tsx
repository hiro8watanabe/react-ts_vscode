import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { MvText } from "../atoms/text/MvText";
import { MvBigTitle } from "../atoms/title/MvBigTitle";


export const MainVisualSection = () => {
  const History = useHistory();
  const onClickContact = () => {
    History.push("/contact");
  };

  return (
    <>
      <MvBigTitle>About</MvBigTitle>
      <MvText>Aboutページです。</MvText>
      <PrimaryButton onClick={onClickContact}>contact</PrimaryButton>
    </>
  );
};
