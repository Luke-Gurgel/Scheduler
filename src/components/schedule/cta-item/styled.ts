import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const AddButton = styled.button`
  display: flex;
  height: 8vh;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  position: relative;
  border: none;
  overflow: hidden;
  transition: background-color 0.4s ease;
  background-color: ${(props: ThemeProps) => `${props.theme.bg3}`};

  @media screen and (hover: hover) and (pointer: fine) {
    :hover {
      background-color: ${(props: ThemeProps) => `${props.theme.primary}`};
    }
  }

  :focus {
    outline: none;
  }

  ::before {
    content: "";
    top: 50%;
    left: 50%;
    padding: 50%;
    opacity: 0;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.8s, opacity 0.8s;
    transform: translate(-50%, -50%) scale(2);
  }

  :active::before {
    transition: 0s;
    opacity: 0.2;
    transform: translate(-50%, -50%) scale(0);
  }

  @media screen and (max-width: 800px) {
    padding: 0 3vh;
  }
`
