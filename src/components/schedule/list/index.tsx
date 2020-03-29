import React from "react"
import CTAItem from "../cta-item"
import * as Styled from "./styled"
import ListItem from "../list-item"
import { WeekDayItem } from "src/types"
import { Droppable } from "react-beautiful-dnd"

interface Props {
  date: string
  weekDayItem: WeekDayItem
}

const List = ({ weekDayItem, date }: Props) => {
  const renderItems = () => {
    if (!weekDayItem.members.length) {
      return <CTAItem />
    }

    return weekDayItem.members.map((member, i) => (
      <ListItem key={member.name} item={member} index={i} />
    ))
  }

  const listDirection = window.innerWidth > 800 ? "vertical" : "horizontal"

  return (
    <Styled.Container>
      <Styled.SectionContainer>
        <Styled.WeekDayTitle>{weekDayItem.weekDay}</Styled.WeekDayTitle>
        <Styled.DateSubtitle>{date}</Styled.DateSubtitle>
      </Styled.SectionContainer>
      <Droppable droppableId={weekDayItem.id} direction={listDirection}>
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
