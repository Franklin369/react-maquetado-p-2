import styled from "styled-components";
import Lottie from "react-lottie";
import { Device } from "../../styles/breakpoints";
export function Lottieanimacion({ alto, ancho, animacion, top, right }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  return (
    <Container $top={top} $right={right}>
      <Lottie
        options={defaultOptions}
        height={`${alto}px`}
        width={`${ancho}px`}
        isClickToPauseDisabled
      />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  @media ${Device.laptop} {
    right: calc(${(props) => props.$right} + 80px);
  }
  @media ${Device.desktop} {
    right: calc(${(props) => props.$right} + 11rem);
  }
`;
