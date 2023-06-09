import HomePageSection from "./HomePageSection/HomePageSection";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <HomePageSection
        linkUrl="https://blog.khalil232.com"
        className="BlogSection"
        sectionTitle="Blogs"
      ></HomePageSection>
      <HomePageSection
        linkUrl="https://blog.khalil232.com"
        className="AppsSection"
        sectionTitle="Apps"
      ></HomePageSection>
      <HomePageSection
        linkUrl="https://blog.khalil232.com"
        className="AboutSection"
        sectionTitle="About"
      ></HomePageSection>
    </div>
  );
}

export default HomePage;
