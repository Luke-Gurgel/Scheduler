import styled from "styled-components"
import { ThemeProps } from "src/types"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0 5vh;
  margin-bottom: 20px;

  h1 {
    display: inline-block;
    color: ${(props: ThemeProps) => props.theme.txt1};
  }

  @media screen and (max-width: 800px) {
    padding: 0 2vh;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;

  @media screen and (max-width: 560px) {
    justify-content: center;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AddButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  margin-left: 20px;
  margin-top: 6px;
  border: none;
  transition: all 0.2s ease;
  background-color: ${(props: ThemeProps) => props.theme.bg2};

  :focus {
    outline: none;
  }

  @media screen and (hover: hover) and (pointer: fine) {
    :hover {
      margin-top: 0px;
      background-color: ${(props: ThemeProps) => props.theme.bg3};
      box-shadow: 0px 10px 17px 0px rgba(0, 0, 0, 0.2);
    }
  }
`
