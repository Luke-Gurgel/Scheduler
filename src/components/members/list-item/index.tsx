import React, { memo } from "react"
import * as Styled from "./styled"
import { Member } from "src/types"
import { Draggable } from "react-beautiful-dnd"

interface Props {
  member: Member
  index: number
}

const ListItem = ({ member, index }: Props) => {
  return (
    <Styled.Container>
      <Draggable draggableId={member.id} index={index}>
        {(provided, snapshot) => (
          <Styled.InnerContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <img src="https://i.pravatar.cc/100" alt="user" />
            <span>{member.name}</span>
          </Styled.InnerContainer>
        )}
      </Draggable>
    </Styled.Container>
  )
}

export default memo(ListItem)
