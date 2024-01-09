import styled from "styled-components";
import { reu } from "../../utils/dataEstatica";
export function Btn1({ texto, bgcolor, color }) {
  return (
    <Container $bgcolor={bgcolor} $color={color}>
      <reu.icononota />
      {texto}
    </Container>
  );
}
const Container = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  gap: 12px;
  padding: 12px 20px 12px 12px;
  font-size: 15px;
  padding: 10px 25px;
  border-radius: 16px;
  background-color: ${(props) => props.$bgcolor};
  border: 2px solid rgba(50, 50, 50, 0.5);
  border-bottom: 5px solid rgba(50, 50, 50, 0.5);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
  color: rgb(${(props) => props.$color});

  &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.5);
  }
`;
