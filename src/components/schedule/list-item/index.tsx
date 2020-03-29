import React, { memo } from "react"
import * as Styled from "./styled"
import { Draggable } from "react-beautiful-dnd"
import { Member } from "src/types"

interface Props {
  item: Member
  index: number
}

const ListItem = ({ item, index }: Props) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Styled.Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
        >
          <span>{item.name}</span>
          <span>{item.role}</span>
        </Styled.Container>
      )}
    </Draggable>
  )
}

export default memo(ListItem)
