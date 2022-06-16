import styled from "styled-components";
import bgImg from "../../images/error-g00fbd6739_1920-min.jpg";
import { Page404Test } from "../molecules/Page404Test";
import { AboutSection } from "../organisms/AboutSection";

export const Page404 = () => {
  return (
    <>
      <SSection>
        <SWrapper>
          <Page404Test/>
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
    background-color: rgba(0, 0, 0, 0.6);
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
