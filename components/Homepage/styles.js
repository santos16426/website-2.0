import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
`;
export const ScrollButton = styled.div`
  background: transparent;
  position: absolute;
  z-index: 9;
  text-align: center;
  bottom: 10px;
  left: 50%;
  width: 150px;
  margin-left: -75px;
  animation-name: bounce-1;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  p {
    color: white;
  }
  img {
    width: 10px;
  }
  @keyframes bounce-1 {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
export const TypeWriterWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 10%;
  .contact-me {
  }

  .button-container {
    position: relative;
  }
  @media screen and (max-width: ${(props) => props.theme.phone}) {
    .typewriter-container {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
