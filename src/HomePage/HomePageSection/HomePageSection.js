import "./HomePageSection.css";

function HomePageSection(props) {
  return (
    <a href={props.linkUrl} className={"HomePageSection " + props.className}>
      <span>{props.sectionTitle}</span>
    </a>
  );
}

export default HomePageSection;
