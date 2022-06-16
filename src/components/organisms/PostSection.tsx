import React from "react";
import styled from "styled-components";
import bgImg1 from "../../images/undraw_Online_learning_re_qw08.png";
import bgImg2 from "../../images/undraw_Success_factors_re_ce93.png";
import bgImg3 from "../../images/undraw_Clean_up_re_504g.png";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const PostSection = () => {
  return (
    <SArticle>
      <SCard>
        <SCardItems>
          <SCardWrapper>
            <SCardItem href="#">
              <SImgBox>
                <SImg src={bgImg1} alt="" />
              </SImgBox>
              <STextBox>
                <STitle>【React初心者必見】サルでもわかるuseStateの使い方</STitle>
                <SPublished dateTime="2020.06.28">2020.06.28</SPublished>
              </STextBox>
            </SCardItem>
          </SCardWrapper>
          <SCardWrapper>
            <SCardItem href="#">
              <SImgBox>
                <SImg src={bgImg2} alt="" />
              </SImgBox>
              <STextBox>
                <STitle>Reactにおける再レンダリングの最適化と重要性</STitle>
                <SPublished dateTime="2020.07.02">2020.07.02</SPublished>
              </STextBox>
            </SCardItem>
          </SCardWrapper>
          <SCardWrapper>
            <SCardItem href="#">
              <SImgBox>
                <SImg src={bgImg3} alt="" />
              </SImgBox>
              <STextBox>
                <STitle>TypeScriptで書くReact入門</STitle>
                <SPublished dateTime="2020.07.10">2020.07.10</SPublished>
              </STextBox>
            </SCardItem>
          </SCardWrapper>
        </SCardItems>
      </SCard>
      <SButton>もっと見る</SButton>
      <PrimaryButton>記事一覧</PrimaryButton>
    </SArticle>
  );
};

const SArticle = styled.article`
  padding: 60px 0 88px;
  max-width: 1180px;
  margin: 0 auto;
  text-align: center;
`;
const SCard = styled.div`
  width: 100%;
`;
const SCardItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 45px;
`;
const SCardWrapper = styled.div`
  margin-right: 25px;
  width: calc(33% - 50px);
  flex-grow: 1;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  &:nth-child(3) {
    margin-right: 0;
  }
`;

const SCardItem = styled.a`
  height: 100%;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

const SImgBox = styled.figure`
  position: relative;
  overflow: hidden;
  padding-top: 60%;
  margin: 10px 5px;
`;
const SImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`;
const STextBox = styled.div`
  padding: 20px;
  text-align: left;
  height: 168px;
  display: flex;
  flex-direction: column;
`;
const STitle = styled.h2`
  font-size: 18px;
  line-height: 1.5;
  font-weight: bold;
`;
const SPublished = styled.time`
  margin-top: auto;
  font-size: 14px;
`;
const SButton = styled.a`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 5px;
  padding: 17px 110px;
  transition: 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
    opacity: 0.7;
  }
`;

// const SSection = styled.section`
//   position: relative;
//   background: url(${bgImg}) center center / cover no-repeat fixed;
//   width: 100vw;
//   height: 650px;

//   &::before {
//     content: "";
//     /* ↓暗いオーバーレイを半透明で配置 */
//     background-color: rgba(0, 0, 0, 0.2);
//     /* ↓全体を覆うように配置 */
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: block;
//   }
// `;

// const SWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
// `;
