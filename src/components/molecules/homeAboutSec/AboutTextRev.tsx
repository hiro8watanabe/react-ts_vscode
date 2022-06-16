import styled from "styled-components";

export const AboutTextRev = () => {
  return (
    <div>
      <SH2title>
        What's TypeScript?
        <SSpan>TypeScriptについて</SSpan>
      </SH2title>
      <SText>
        TypeScriptとはMicrosoft社が開発した
        <br />
        JavaScriptのスーパーセットです。
        <br />
        型宣言することで、コンパイル時にエラーを吐き出すので
        <br />
        よりバグの少ない開発が可能になります。
        <br />
        JavaScriptが動的型付け言語に分類されるのに対し、
        <br />
        TypeScriptは静的型付け言語に分類されます。
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
