import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 8vh;
  border: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};

  p {
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: 3px;
    color: ${(props: ThemeProps) => props.theme.txt2};
  }

  @media screen and (max-width: 800px) {
    p {
      font-size: 0.8rem;
    }
  }
`

export const ArrowButton = styled.button`
  width: 5vh;
  height: 5vh;
  text-align: center;
  border-radius: 50%;
  transition: all 0.2s;
  background-color: transparent;
  border: none;

  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props: ThemeProps) => props.theme.txt1};

  @media screen and (hover: hover) and (pointer: fine) {
    :hover {
      width: 6vh;
      height: 6vh;
      background-color: ${(props: ThemeProps) => props.theme.bg3};
    }
  }

  :focus {
    outline: 0;
  }

  :active {
    top: 1px;
    position: relative;
  }

  @media screen and (max-width: 800px) {
    height: 3vh;
    width: 3vh;
    font-size: 0.8rem;
  }
`
