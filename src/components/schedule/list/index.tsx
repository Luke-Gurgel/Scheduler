import React, { useState } from "react"
import * as Styled from "./styled"
import ListItem from "../list-item"
import { WeekDayItem } from "src/types"
import Popover from "react-tiny-popover"
import { Droppable } from "react-beautiful-dnd"
import MemberListPopover from "src/components/member-list-popover"

interface Props {
  date: string
  weekDayItem: WeekDayItem
}

const List = ({ weekDayItem, date }: Props) => {
  const [open, setOpen] = useState(false)

  const renderItems = () => {
    return weekDayItem.members.map((member, i) => (
      <ListItem key={member.name} item={member} index={i} />
    ))
  }

  const listDirection = window.innerWidth > 800 ? "vertical" : "horizontal"

  return (
    <Styled.Container>
      <Popover
        padding={20}
        isOpen={open}
        onClickOutside={() => setOpen(!open)}
        containerClassName="popover-container"
        position={["right", "left", "top", "bottom"]}
        content={<MemberListPopover dayID={weekDayItem.id} />}
      >
        <Styled.SectionContainer focused={open} onClick={() => setOpen(!open)}>
          <Styled.WeekDayTitle>{weekDayItem.weekDay}</Styled.WeekDayTitle>
          <Styled.DateSubtitle>{date}</Styled.DateSubtitle>
        </Styled.SectionContainer>
      </Popover>
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
