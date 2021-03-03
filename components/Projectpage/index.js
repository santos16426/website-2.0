import { Wrapper } from "./styles";
import projects from "./data.json";
const ProjectPage = () => {
  return (
    <Wrapper>
      {projects.map((project, index) => (
        <div class="slide" data-anchor={`slide${index}`}>
          Project {index}
        </div>
      ))}
    </Wrapper>
  );
};
export default ProjectPage;
