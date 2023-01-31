import React from "react";
import moment from "moment";

import styled from "styled-components";

const Container = styled.div`
  background-color: var(--light-gray);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 25px 0;
  text-align: center;
  width: 100%;
`;

const Content = styled.div`
  color: var(--dark-gray);
  font-family: "Operator";
`;

const Footer = () => (
  <Container>
    <Content>@PM {moment().year()}</Content>
  </Container>
);

export { Footer };
