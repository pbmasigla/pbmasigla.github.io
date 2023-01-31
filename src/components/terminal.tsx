import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Operator";
  height: calc(100vh - 189px);
  margin: 25px 0;
  width: 100%;
`;

const Content = styled.div`
  background-color: var(--dark-gray);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: var(--off-white);
  cursor: text;
  font-size: 0.875em;
  height: calc(100vh - 300px);
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2px 10px;
  width: 65%;

  @media (max-width: 600px) {
    font-size: 0.7em;
    width: 85%;
  }
`;

const Entry = styled.div`
  display: flex;
  line-height: 33px;
  font-weight: bold;
`;

const ItalicEntry = styled.div`
  font-family: "Operator Italic";
  margin-right: 6px;
`;

const Goodbye = styled.div`
  color: var(--purple);
  font-family: "Operator Italic";
  font-size: 1.125em;
  line-height: 33px;
  text-align: center;
`;

const Header = styled.div`
  color: var(--dark-gray);
  margin-bottom: 20px;
  text-align: center;
`;

const Welcome = styled.div`
  font-family: "Operator Italic Bold";
  font-size: 1.7em;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;
  margin: 16px auto 0;
  width: 90%;

  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

const Option = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;
  margin-left: 16px;
`;

const Divider = styled.div`
  margin-left: 16px;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  line-height: 33px;
  font-weight: bold;
`;

const InputLabel = styled.div`
  font-family: "Operator Italic";
`;

const Input = styled.input`
  background: transparent;
  border: none;
  color: var(--off-white);
  font-family: "Operator";
  font-size: 1em;
  font-weight: bold;
  margin-left: 5px;
  margin-top: -1px;
  outline: none;
  width: calc(100% - 260px);

  @media (max-width: 600px) {
    width: calc(100% - 195px);
  }
`;

type EntryType = {
  value: string;
  isValid: boolean;
  message?: string;
};

type OptionInfo = {
  type: string;
  value?: string;
  key: string;
};

const TERMINAL_OPTIONS: { [key: string]: OptionInfo } = {
  email: {
    key: "email",
    type: "link",
    value: "mailto:patricia.masigla@gmail.com",
  },
  resume: {
    key: "resume",
    type: "link",
    value: "/assets/Patricia Masigla - Resume.pdf",
  },
  codepen: {
    key: "codepen",
    type: "link",
    value: "https://codepen.io/pbmasigla",
  },
  twitter: {
    key: "twitter",
    type: "link",
    value: "https://twitter.com/PATatohead",
  },
  linkedin: {
    key: "linkedin",
    type: "link",
    value: "https://www.linkedin.com/in/patricia-masigla-97687575",
  },
  logout: {
    key: "logout",
    type: "logout",
  },
  secret: {
    key: "secret",
    type: "secret",
  },
};

const Terminal = () => {
  const [entries, setEntries] = useState<EntryType[]>([]);
  const [terminalInput, setTerminalInput] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);
  const terminalInputRef = useRef<HTMLInputElement>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    focusOnTerminalInput();
  }, []);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollIntoView();
    }
  }, [entries, terminalInput, terminalContentRef]);

  const focusOnTerminalInput = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  };

  const handleOnChange = useCallback(
    (e) => {
      setTerminalInput(e.target.value);
    },
    [setTerminalInput]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13 && terminalInput !== "") {
        let isValid = false;
        const inputValue = terminalInput.toLowerCase();
        if (TERMINAL_OPTIONS[inputValue]) {
          isValid = true;
          doOption(TERMINAL_OPTIONS[inputValue]);
        }

        let newEntry = {
          value: terminalInput,
          message: "",
          isValid,
        };

        if (terminalInput === "secret") {
          newEntry = {
            ...newEntry,
            message: "Mac: [cmd] + [option] + [u] or Windows: [ctrl] + [u]",
            isValid: true,
          };
        }

        setEntries([...entries, newEntry]);
        setTerminalInput("");
      }
    },
    [terminalInput, entries, setEntries, setTerminalInput]
  );

  const handleClickOption = useCallback(
    (option: OptionInfo) => {
      doOption(option);
      let newEntry = {
        value: option.key,
        message: "",
        isValid: true,
      };

      if (option.key === "secret") {
        newEntry = {
          ...newEntry,
          message: "Mac: [cmd] + [option] + [u] or Windows: [ctrl] + [u]",
          isValid: true,
        };
      }

      setEntries([...entries, newEntry]);
      setTerminalInput("");
    },
    [entries, setEntries]
  );

  const doOption = (option: OptionInfo) => {
    if (option.type === "logout") {
      setLoggedOut(true);
    } else if (option.type !== "secret") {
      window.open(option.value, "_blank");
    }
  };

  const terminalOptions = Object.values(TERMINAL_OPTIONS);
  return (
    <Container>
      <Header>
        <Welcome>Let&#39;s Get In Touch!</Welcome>
        <Options>
          Options:
          {terminalOptions.map((option, i) => {
            return (
              <Option
                onClick={() => handleClickOption(option)}
                key={option.key}
              >
                {option.key}{" "}
                {i < terminalOptions.length - 1 && <Divider>|</Divider>}
              </Option>
            );
          })}
        </Options>
      </Header>

      <Content ref={terminalContentRef} onClick={focusOnTerminalInput}>
        {entries.reduce((prev, curr, i) => {
          prev.push(
            <Entry key={`key_${i}`}>
              <ItalicEntry>pbmasigla.github.io:~ guest $ </ItalicEntry>
              {curr.value}
            </Entry>
          );
          if (!curr.isValid) {
            prev.push(
              <Entry
                key={`key_error_${i}`}
              >{`-bash: ${curr.value}: command not found`}</Entry>
            );
          }
          if (!!curr.message) {
            prev.push(
              <Entry
                key={`key_secret_${i}`}
              >{`-Protip: ${curr.message}`}</Entry>
            );
          }
          return prev;
        }, [] as any[])}

        {loggedOut ? (
          <Goodbye>Have a good day!</Goodbye>
        ) : (
          <InputContainer>
            <InputLabel>pbmasigla.github.io:~ guest $</InputLabel>
            <Input
              ref={terminalInputRef}
              value={terminalInput}
              onKeyDown={handleKeyDown}
              onChange={handleOnChange}
            />
          </InputContainer>
        )}
      </Content>
    </Container>
  );
};

export { Terminal };
