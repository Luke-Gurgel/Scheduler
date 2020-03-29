import styled from "styled-components"
import { ThemeProps } from "src/types"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 5vh;

  h1 {
    color: ${(props: ThemeProps) => props.theme.txt1};
  }

  @media screen and (max-width: 800px) {
    padding: 0 2vh;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
