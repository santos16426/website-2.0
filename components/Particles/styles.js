import styled from "styled-components";

export const ParticlesWrapper = styled.div`
  background-color: #1f2833;
  position: relative;
  height: 100vh;
  @media screen and (max-width: ${(props) => props.theme.tablet}) {
    margin-top: -60px;
    padding-top: 60px;
  }
`;
