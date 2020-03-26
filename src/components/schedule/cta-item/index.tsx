import React from "react"
import * as Styled from "./styled"
import addIcon from "src/assets/plus.svg"

const CTAItem = () => {
  return (
    <Styled.AddButton>
      <img src={addIcon} height={25} width={25} alt="" />
    </Styled.AddButton>
  )
}

export default CTAItem
