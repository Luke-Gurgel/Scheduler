import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 5vh;

  h1 {
    color: ${(props: ThemeProps) => `${props.theme.txt1}`};
  }

  @media screen and (max-width: 800px) {
    padding: 0 2vh;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const GridHeader = styled.div`
  flex-grow: 1;
  display: flex;
  padding: 10px 0;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};

  span:nth-child(1) {
    font-weight: bold;
    color: ${(props: ThemeProps) => `${props.theme.txt2}`};
  }

  span:nth-child(2) {
    font-size: 0.8rem;
    color: ${(props: ThemeProps) => `${props.theme.txt3}`};
  }
`
