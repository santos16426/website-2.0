import Particles from "../Particles";
import { Wrapper, TypeWriterWrapper, ScrollButton } from "./styles";
import Typewriter from "../Typewriter";
import HoverText from "../HoverText";
import { skills, name } from "./data.json";
const Homepage = ({ fullpageApi }) => {
  return (
    <Wrapper>
      <TypeWriterWrapper>
        <HoverText className="h1" string="Hi," />
        <HoverText className="h2" string={`I am ${name}`} />
        <Typewriter strings={skills} />
      </TypeWriterWrapper>
      <ScrollButton onClick={() => fullpageApi.moveSectionDown()}>
        <p>Scroll down</p>
        <img src="/icons/double-down-arrows.svg" />
      </ScrollButton>
      <Particles />
    </Wrapper>
  );
};
export default Homepage;
