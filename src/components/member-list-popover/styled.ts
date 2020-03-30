import styled from "styled-components"
import { ThemeProps } from "src/types"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  max-height: 50vh;
  padding: 15px;
  border-radius: 4px;
  background-color: ${(props: ThemeProps) => props.theme.bg2};

  @media screen and (max-width: 562px) {
    max-width: 70vw;
  }
`

export const ProfilePic = styled.img`
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  margin-right: 15px;
`

export const RowContainer = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
`

export const SearchInput = styled.input`
  padding: 12px 10px;
  background-color: ${(props: ThemeProps) => props.theme.bg3};
  color: ${(props: ThemeProps) => props.theme.txt1};
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  transition: 0.3s all;

  ::placeholder {
    color: ${(props: ThemeProps) => props.theme.info};
  }

  :focus {
    outline: none;
    background-color: ${(props: ThemeProps) => props.theme.bg4};
  }

  :hover {
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  }
`

export const List = styled.ul`
  list-style-type: none;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 0;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: 4px;
    flex-grow: 1;
    min-height: 80px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s ease;
    border-bottom: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg3}`};

    @media screen and (hover: hover) and (pointer: fine) {
      :hover {
        background-color: ${(props: ThemeProps) => props.theme.bg3};
        box-shadow: 0px 10px 17px 0px rgba(0, 0, 0, 0.2);
      }
    }

    :active {
      top: 1px;
      position: relative;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  span {
    text-align: left;
    color: ${(props: ThemeProps) => props.theme.txt3};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`
