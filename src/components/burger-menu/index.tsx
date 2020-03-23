import React from "react"
import { StyledBurger } from "./styled"

interface Props {
  open: boolean
  onClick: () => void
}

export const BurgerMenu = (props: Props) => {
  return (
    <StyledBurger open={props.open} onClick={props.onClick}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default BurgerMenu
