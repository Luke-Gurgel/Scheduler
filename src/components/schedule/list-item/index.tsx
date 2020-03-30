import React, { memo, useState } from "react"
import * as Styled from "./styled"
import Popover from "react-tiny-popover"
import { ScheduleMemberItem } from "src/types"
import { Draggable } from "react-beautiful-dnd"
import MemberPopover from "src/components/popover"

interface Props {
  item: ScheduleMemberItem
  index: number
}

const ListItem = ({ item, index }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Popover
          isOpen={open}
          padding={20}
          onClickOutside={() => setOpen(!open)}
          containerClassName="popover-container"
          position={["right", "left", "top", "bottom"]}
          content={
            <MemberPopover
              member={item}
              source="schedule"
              close={() => setOpen(false)}
            />
          }
        >
          <Styled.Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            onClick={() => setOpen(!open)}
            ref={provided.innerRef}
          >
            <span>{item.name}</span>
            <span>{item.role}</span>
          </Styled.Container>
        </Popover>
      )}
    </Draggable>
  )
}

export default memo(ListItem)
