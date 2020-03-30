import styled from "styled-components"
import { ThemeProps } from "src/types"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  padding: 15px 0;
  overflow-y: scroll;
  border-radius: 4px;
  background-color: ${(props: ThemeProps) => props.theme.bg2};
`

export const ProfilePic = styled.img`
  width: 8vh;
  height: 8vh;
  align-self: center;
  margin-bottom: 2vh;
  border-radius: 50%;
`

export const RowContainer = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 0 15px 8px 15px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: ${(props: ThemeProps) => `0.5px solid ${props.theme.bg4}`};

  label {
    text-align: left;
    font-style: italic;
    color: ${(props: ThemeProps) => props.theme.txt3};
  }

  input {
    border: none;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    background-color: transparent;
    color: ${(props: ThemeProps) => props.theme.txt1};

    :focus {
      outline: none;
    }
    :hover {
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    }
  }
`

export const UpdateButton = styled.button`
  border: none;
  font-size: 1rem;
  margin-top: 20px;
  font-weight: bold;
  align-self: center;
  padding: 14px 25px;
  border-radius: 6px;
  transition: all 0.4s;
  background-color: transparent;
  color: ${(props: ThemeProps) => props.theme.txt1};

  :hover {
    background-color: ${(props: ThemeProps) => props.theme.bg3};
  }

  :focus {
    outline: 0;
  }

  :active {
    top: 1px;
    position: relative;
  }
`
