import styled from "styled-components";
import bgImg from "../../images/patrick-tomasso-QMDap1TAu0g-unsplash-min.jpg";
import { MvTitle } from "../molecules/MvTitle";
import { AboutSection } from "../organisms/AboutSection";

export const Home = () => {
  return (
    <>
      <SSection>
        <SWrapper>
          <MvTitle />
        </SWrapper>
      </SSection>
      <AboutSection />
    </>
  );
};

const SSection = styled.section`
  position: relative;
  background: url(${bgImg}) center center / cover no-repeat fixed;
  width: 100vw;
  height: 650px;

  &::before {
    content: "";
    /* ↓暗いオーバーレイを半透明で配置 */
    background-color: rgba(0, 0, 0, 0.2);
    /* ↓全体を覆うように配置 */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
