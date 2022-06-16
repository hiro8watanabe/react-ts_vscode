import { AboutSection } from "../organisms/AboutSection";
import { MvSection } from "../organisms/MvSection";
import { PostSection } from "../organisms/PostSection";
import { ServiceSection } from "../organisms/ServiceSection";

export const Home = () => {
  return (
    <>
      <MvSection />
      <AboutSection />
      <ServiceSection />
      <PostSection />
    </>
  );
};
