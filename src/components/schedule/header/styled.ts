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
    color: ${(props: ThemeProps) => `${props.theme.txt2}`};
  }
`

export const ArrowButton = styled.button`
  height: 5vh;
  width: 5vh;
  border-radius: 2.5vh;
  transition: all 0.2s;
  background-color: transparent;
  border: none;

  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props: ThemeProps) => `${props.theme.txt1}`};

  :hover {
    width: 6vh;
    height: 6vh;
    border-radius: 3vh;
    background-color: ${(props: ThemeProps) => `${props.theme.bg3}`};
  }

  :focus {
    outline: 0;
  }

  :active {
    top: 1px;
    position: relative;
  }
`
