import React from "react"
import * as Styled from "./styled"
import ColumnItem from "../column-item"
import CTAItem from "../cta-item"
import { WeekDay } from "src/types/schedule"
import { Droppable } from "react-beautiful-dnd"

interface Props {
  date: string
  column: {
    id: string
    weekDay: WeekDay
    memberIDs: string[]
  }
  members: { id: string; name: string; role: string }[]
}

const Column = ({ column, members, date }: Props) => {
  const renderItems = () => {
    if (!members.length) {
      return <CTAItem />
    }

    return members.map((member, i) => (
      <ColumnItem key={member.name} item={member} index={i} />
    ))
  }

  return (
    <Styled.Container>
      <Styled.WeekDayTitle>{column.weekDay}</Styled.WeekDayTitle>
      <Styled.DateSubtitle>{date}</Styled.DateSubtitle>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <Styled.List
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {renderItems()}
            {provided.placeholder}
          </Styled.List>
        )}
      </Droppable>
    </Styled.Container>
  )
}

export default Column
