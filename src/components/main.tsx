import React from "react";
import styled from "styled-components";

import { Footer } from "components/footer";
import { Header } from "components/header";
import { Terminal } from "components/terminal";

const Container = styled.div`
  align-items: center;
  background-color: var(--off-white);
  display: flex;
  flex-direction: column;
  font-family: "Operator Italic";
  height: 100vh;
  justify-content: space-between;
  margin: 0;
  width: 100vw;
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <Terminal />
      <Footer />
    </Container>
  );
};

export { Main };
