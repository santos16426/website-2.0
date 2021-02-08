import Particles from "../Particles";
import { Wrapper, TypeWriterWrapper } from "./styles";
import Typewriter from "../Typewriter";
import HoverText from "../HoverText";
const Homepage = () => {
  return (
    <Wrapper>
      <TypeWriterWrapper>
        <HoverText className="h1" string="Hi," />
        <HoverText className="h2" string="I am Billy Joe" />
        <Typewriter
          strings={[
            "Software Engineer",
            "Web Development",
            "Backend Development",
            "Mobile Development",
            "Continuous Integration",
            "Continuous Deployment",
          ]}
        />
      </TypeWriterWrapper>

      <Particles />
    </Wrapper>
  );
};
export default Homepage;
