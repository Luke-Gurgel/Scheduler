import React from "react"
import * as Styled from "./styled"
import useHeader from "./use-header"

const Header = () => {
  const { startDate, endDate, moveToNextWeek, moveToPrevWeek } = useHeader()

  return (
    <Styled.Container>
      <Styled.ArrowButton onClick={() => moveToPrevWeek()}>
        ←
      </Styled.ArrowButton>
      <p>
        {startDate} - {endDate}
      </p>
      <Styled.ArrowButton onClick={() => moveToNextWeek()}>
        →
      </Styled.ArrowButton>
    </Styled.Container>
  )
}

export default Header
