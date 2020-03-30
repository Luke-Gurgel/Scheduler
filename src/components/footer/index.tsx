import React from "react"
import * as Styled from "./styled"
import { version } from "src/constants"

const Footer = () => {
  return (
    <Styled.Container>
      <p>{version}</p>
    </Styled.Container>
  )
}

export default Footer
