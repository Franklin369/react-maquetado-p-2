import styled from "styled-components";
import { Btn1 } from "../moleculas/Btn1";
export function MensajeToggle({ item, bgprimary, bgsecundary }) {
  return (
    <Container $bgprimary={bgprimary} $bgsecundary={bgsecundary}>
      <section className="contentText">
        <span>{item?.titulo}</span>
        <p>{item?.detalle}</p>
      </section>
      <Btn1 color={bgprimary} bgcolor="#fff" texto="EMPEZAR +10exp" />
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgb(${(props) => props.$bgprimary});
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:15px;
  padding:16px;
  color:#fff;
  top:72px;
  justify-content:center;
  .contentText{
    text-align:left;
    span{
      font-size:19px;
      font-weight:700;
    }
    p{
      font-size:17px;
    }
  }
`;

