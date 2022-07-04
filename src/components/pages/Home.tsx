import { createContext } from "react";
import { AboutSection } from "../organisms/AboutSection";
import { MvSection } from "../organisms/MvSection";
import { PostSection } from "../organisms/PostSection";
import { ServiceSection } from "../organisms/ServiceSection";

type Props = {
  children: string;
};

const MvTitleSetContext = createContext();

export const Home = () => {
  return (
    <>
      <MvTitleSetContext.Provider>
        <MvSection
          title="React✕TypeScript"
          text="React✕TypeScriptのテストサイトです。"
          children="問い合わせ先"
        />
      </MvTitleSetContext.Provider>
      <AboutSection />
      <ServiceSection />
      <PostSection />
    </>
  );
};
