import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const SecretIframe = styled.iframe`
  margin: 20px 0;
`;

const Secret = () => {
  return (
    <Container>
      <SecretIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/VRlV-H8nzAo"
        allowFullScreen
      ></SecretIframe>
      <SecretIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/sCP3N6nlhtM"
        allowFullScreen
      ></SecretIframe>
      <SecretIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cy2c0toyIbc"
        allowFullScreen
      ></SecretIframe>
      <SecretIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IMET4MOBndI"
        allowFullScreen
      ></SecretIframe>
      <SecretIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SMhbxKpbHYs"
        allowFullScreen
      ></SecretIframe>
    </Container>
  );
};

export { Secret };
