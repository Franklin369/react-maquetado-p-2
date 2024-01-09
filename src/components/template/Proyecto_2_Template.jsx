import styled from "styled-components";
import { Banner1, Btn2, Lottieanimacion, MensajeToggle } from "../../index";
import { CoordenadasRuta, reu } from "../../utils/dataEstatica";
import { useState } from "react";
export function Proyecto_2_Template() {
  const [stateId, setStateId] = useState(0);
  return (
    <Container>
      <section className="header">
        <Banner1 />
      </section>
      <section className="main">
        <Lottieanimacion
          top="20%"
          right="11%"
          ancho="170"
          animacion={reu.animacionduolingo1}
        />
        <Lottieanimacion
         
          top="60%"
          ancho="170"
          right="60%"
          animacion={reu.animacionduolingo2}
        />
        {CoordenadasRuta.map((item, index) => {
          return (
            <Btn2
              stateId={stateId}
              setstateId={setStateId}
              item={item}
              titulo={item.titulo}
              bgprimary="88, 204, 2"
              bgsecundary="70, 163, 2"
              icono={item.icono}
              left={item.left}
            />
          );
        })}
      </section>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .header {
    padding: 24px;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
  }
`;
