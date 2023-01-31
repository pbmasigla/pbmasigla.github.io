import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  align-items: center;
  background-color: var(--purple);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  display: flex;
  padding: 10px 20px;
  width: 100%;
`;

const HeaderLeft = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  width: 50%;
`;

const HeaderRight = styled.div`
  text-align: right;
  width: 50%;
`;

type ProPicContainerProps = {
  isDoingEffect: boolean;
};
const ProPicContainer = styled.div<ProPicContainerProps>`
  display: flex;
  margin-right: 5px;
  transition: all 1s ease;
  -webkit-transition: all 1s ease;

  ${(props) =>
    props.isDoingEffect &&
    css`
      -webkit-animation: spin 1s cubic-bezier(0.67, 0.34, 0.51, 0.75);
      -moz-animation: spin 1s cubic-bezier(0.67, 0.34, 0.51, 0.75);
      -ms-animation: spin 1s cubic-bezier(0.67, 0.34, 0.51, 0.75);
      animation: spin 1s cubic-bezier(0.67, 0.34, 0.51, 0.75);
    `}
`;

const ProPic = styled.img`
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 50px;
  width: 50px;
`;

const Name = styled.div`
  color: var(--off-white);
  font-size: 1.56em;

  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`;

const Description = styled.div`
  color: var(--off-white);
  font-size: 1.38em;

  @media (max-width: 600px) {
    font-size: 0.8em;

    span {
      display: block;
    }
  }
`;

const WarningContainer = styled.div`
  left: 7px;
  position: absolute;
  top: 70px;
`;

const Triangle = styled.div`
  border-bottom: 13px solid var(--light-gray);
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  height: 0;
  margin-left: 32px;
  margin-top: -8px;
  position: absolute;
  width: 0;
  z-index: 2;
`;

const Warning = styled.div`
  align-items: center;
  background-color: var(--light-gray);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: var(--dark-gray);
  display: flex;
  height: 50px;
  justify-content: space-around;
  text-align: center;
  width: 240px;
`;

const Header = () => {
  const [isDoingEffect, setIsDoingEffect] = useState(false);
  const [hoverNumber, setHoverNumber] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [name, setName] = useState("Patricia Masigla");

  const setRandomName = useCallback(
    (index: number, randomName: string) => {
      setTimeout(() => setName(randomName), index * 70);
    },
    [setName]
  );

  const nameAnimation = useCallback(() => {
    setIsDoingEffect(true);
    const possible = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
    const originalName = "Patricia Masigla";
    let randomName = "";

    originalName.split("").forEach((letter1, i) => {
      randomName = name.substring(0, i + 1);
      originalName.split("").forEach((letter2, j) => {
        if (j > i) {
          randomName += possible.charAt(
            Math.floor(Math.random() * possible.length)
          );
        }
      });
      setRandomName(i, randomName);

      setTimeout(() => setIsDoingEffect(false), 1000);
    });
  }, [setIsDoingEffect, setRandomName]);

  const increaseHoverNum = useCallback(() => {
    const newHoverNumber = hoverNumber + 1;
    const newShowWarning = newHoverNumber % 3 === 0 && newHoverNumber > 0;

    setHoverNumber(newHoverNumber);
    setShowWarning(newShowWarning);

    if (newShowWarning) {
      setTimeout(() => setShowWarning(false), 2000);
    }
  }, [hoverNumber, setShowWarning, setHoverNumber]);

  const handleHover = useCallback(() => {
    nameAnimation();
    increaseHoverNum();
  }, [nameAnimation, increaseHoverNum]);

  return (
    <Container>
      <HeaderLeft onMouseEnter={handleHover}>
        <ProPicContainer isDoingEffect={isDoingEffect}>
          <ProPic src="/assets/patty.png" />
        </ProPicContainer>
        <Name>{name}</Name>
      </HeaderLeft>

      <HeaderRight>
        <Description>
          <span> Pun Person /</span>
          <span> Developer /</span>
          <span> Engineer</span>
        </Description>
      </HeaderRight>

      {showWarning && (
        <WarningContainer>
          <Triangle />
          <Warning>Stop! I'm getting dizzy</Warning>
        </WarningContainer>
      )}
    </Container>
  );
};

export { Header };
