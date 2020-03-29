import React from "react"
import { format } from "date-fns"
import { useSelector } from "react-redux"
import { RootState } from "src/state/root-state"
import * as Styled from "./styled"
import Header from "./header"
import List from "./list"

const Schedule = () => {
  const { data, currentWeek } = useSelector(
    (state: RootState) => state.schedule,
  )

  function renderLists() {
    return data.orderedWeekDays.map((weekDay, index) => {
      const weekDayItem = data.weekMap[weekDay]
      const date = format(currentWeek[index], "MM/dd")
      return <List weekDayItem={weekDayItem} date={date} key={weekDayItem.id} />
    })
  }

  return (
    <Styled.Container>
      <h1>Schedule</h1>
      <Header />
      <Styled.ListContainer>{renderLists()}</Styled.ListContainer>
    </Styled.Container>
  )
}

export default Schedule
