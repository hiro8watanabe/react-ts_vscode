import styled from "styled-components";
import bgImg from "../../images/s-o-c-i-a-l-c-u-t-1RT4txDDAbM-unsplash-min.jpg";
import { AboutSection } from "../organisms/AboutSection";
import { MainVisualSection } from "../organisms/MainVisualSection";

export const About = () => {
  return (
    <>
      <SSection>
        <SWrapper>
          <MainVisualSection />
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
