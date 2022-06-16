import styled from "styled-components";

export const AboutText = () => {
  return (
    <div>
      <SH2title>
        What's React?
        <SSpan>Reactについて</SSpan>
      </SH2title>
      <SText>
        ReactとはFacebook社（Meta）が開発したJavaScriptライブラリです。
        <br />
        UIをコンポーネント単位に分割し管理することで,
        <br />
        レゴブロックを組み立てるような設計が可能になります。
        <br />
        また仮想DOMを用いた差分レンダリングにより、
        <br />
        パフォーマンスを劇的に向上させることが出来ます。
      </SText>
    </div>
  );
};

const SH2title = styled.h2`
  font-size: 3em;
  font-weight: bold;
  position: relative;
  padding: 1.5rem;
  margin-bottom: 80px;
  margin-left: -20px;

  &::before {
    position: absolute;
    bottom: -30px;
    left: 30px;
    width: 60px;
    height: 4px;
    content: "";
    border-radius: 3px;
    background: #60afffd4;
  }
`;
const SSpan = styled.span`
  position: absolute;
  left: 30px;
  font-size: 1.2rem;
  font-weight: normal;
  display: block;
`;
const SText = styled.p`
  font-size: 18px;
  line-height: 1.8;
`;
