import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const StyledBurger = styled.button<{ open: boolean }>`
  padding: 0;
  z-index: 10;
  width: 2rem;
  border: none;
  display: flex;
  cursor: pointer;
  margin-top: 10px;
  flex-direction: column;
  background: transparent;

  &:focus {
    outline: none;
  }

  div {
    margin: 2px 0;
    width: 1.5rem;
    height: 0.2rem;
    position: relative;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    background: ${(props: ThemeProps) => `${props.theme.txt1}`};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg) translate(3px, 1px)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg) translate(-3px, 5px)" : "rotate(0)")};
    }
  }
`
