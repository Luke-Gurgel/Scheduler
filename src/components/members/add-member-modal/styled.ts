import Rodal from "rodal"
import styled from "styled-components"
import { ThemeProps } from "src/types"

export const Modal = styled(Rodal).attrs({
  animation: "slideDown",
  showCloseButton: false,
})`
  div.rodal-dialog {
    background-color: ${(props: ThemeProps) => props.theme.bg2};
    min-height: 40vh;
    min-width: 30vw;
  }

  @media screen and (max-width: 562px) {
    div.rodal-dialog {
      max-height: 60vh;
      max-width: 75vw;
    }
  }
`

export const Container = styled.div`
  display: flex;
  min-width: inherit;
  min-height: inherit;
  flex-direction: column;
  justify-content: space-around;

  h2 {
    text-align: center;
    color: ${(props: ThemeProps) => props.theme.txt1};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  :nth-child(2) {
    margin-top: 20px;
  }

  label {
    font-size: 0.8rem;
    font-weight: bold;
    color: ${(props: ThemeProps) => props.theme.txt3};
    margin-bottom: 6px;
  }

  span.error {
    margin-top: 4px;
    font-size: 0.7rem;
    font-style: italic;
    color: ${(props: ThemeProps) => props.theme.danger};
  }
`

export const Input = styled.input`
  padding: 12px 10px;
  background-color: ${(props: ThemeProps) => props.theme.bg3};
  color: ${(props: ThemeProps) => props.theme.txt1};
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  transition: 0.3s all;

  ::placeholder {
    color: ${(props: ThemeProps) => props.theme.txt3};
  }

  :focus {
    outline: none;
    background-color: ${(props: ThemeProps) => props.theme.bg4};
  }

  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  button:first-child {
    font-size: 0.8rem;
    font-weight: bold;
    margin-right: 15px;
    background-color: transparent;
    border: none;
    color: ${(props: ThemeProps) => props.theme.txt3};
  }

  button:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    transition: all 0.3s ease-in;
    color: ${(props: ThemeProps) => props.theme.txt2};
    background-color: ${(props: ThemeProps) => props.theme.bg3};

    span {
      margin-right: 12px;
    }
  }

  button:focus {
    outline: none;
  }

  @media screen and (hover: hover) and (pointer: fine) {
    button:last-child:hover {
      position: relative;
      bottom: 1px;
      box-shadow: 0px 10px 17px 0px rgba(0, 0, 0, 0.2);
      background-color: ${(props: ThemeProps) => props.theme.bg4};
    }
  }
`
