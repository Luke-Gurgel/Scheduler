import React from "react"
import { format } from "date-fns"
import { useSelector } from "react-redux"
import { RootState } from "src/state/root-state"
import * as Styled from "./styled"
import Header from "./header"
import Column from "./column"

const Schedule = () => {
  const { data, currentWeek } = useSelector((state: RootState) => state.schedule)

  function renderColumns() {
    return data.columnOrder.map((colID, index) => {
      const col = data.columns[colID]
      const date = format(currentWeek[index], "MM/dd")
      const members = col.memberIDs.map((memberID) => data.members[memberID])
      return <Column key={col.id} column={col} members={members} date={date} />
    })
  }

  return (
    <Styled.Container>
      <h1>Schedule</h1>
      <Header />
      <Styled.Grid>{renderColumns()}</Styled.Grid>
    </Styled.Container>
  )
}

export default Schedule
