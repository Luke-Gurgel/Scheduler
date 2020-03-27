import React from "react"
import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"
import { ThemeProps } from "src/types/theme"
import styled from "styled-components"

interface Props {
  open: boolean
  onClick: () => void
}

const StyledBurger = styled(Burger)`
  z-index: 1000;
  font-size: ${({ isOpen }) => (isOpen ? "12px" : "8px")};

  .burger-lines,
  .burger-lines:after,
  .burger-lines:before {
    background-color: ${(props: ThemeProps) => props.theme.txt1};
  }
`

export const BurgerMenu = ({ open, onClick }: Props) => {
  return <StyledBurger isOpen={open} onClick={onClick} />
}

export default BurgerMenu
