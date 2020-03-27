import React from "react"
import CTAItem from "../cta-item"
import * as Styled from "./styled"
import ListItem from "../list-item"
import { WeekDay } from "src/types/schedule"
import { Droppable } from "react-beautiful-dnd"

interface Props {
  date: string
  list: {
    id: string
    weekDay: WeekDay
    memberIDs: string[]
  }
  members: { id: string; name: string; role: string }[]
}

const List = ({ list, members, date }: Props) => {
  const renderItems = () => {
    if (!members.length) {
      return <CTAItem />
    }

    return members.map((member, i) => (
      <ListItem key={member.name} item={member} index={i} />
    ))
  }

  const listDirection = window.innerWidth > 800 ? "vertical" : "horizontal"

  return (
    <Styled.Container>
      <Styled.SectionContainer>
        <Styled.WeekDayTitle>{list.weekDay}</Styled.WeekDayTitle>
        <Styled.DateSubtitle>{date}</Styled.DateSubtitle>
      </Styled.SectionContainer>
      <Droppable droppableId={list.id} direction={listDirection}>
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

export default List
