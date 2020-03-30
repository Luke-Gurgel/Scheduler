import React, { memo, useState } from "react"
import * as Styled from "./styled"
import { Member } from "src/types"
import Popover from "react-tiny-popover"
import { Draggable } from "react-beautiful-dnd"
import MemberPopover from "src/components/popover"

interface Props {
  member: Member
  index: number
}

const ListItem = ({ member, index }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Styled.Container>
      <Draggable draggableId={member.id} index={index}>
        {(provided, snapshot) => (
          <Popover
            isOpen={open}
            padding={20}
            content={
              <MemberPopover
                member={member}
                source="members"
                close={() => setOpen(false)}
              />
            }
            onClickOutside={() => setOpen(!open)}
            position={["right", "left", "top", "bottom"]}
          >
            <Styled.InnerContainer
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              onClick={() => setOpen(!open)}
              isDragging={snapshot.isDragging}
            >
              <img src="https://i.pravatar.cc/100" alt="user" />
              <span>{member.name}</span>
            </Styled.InnerContainer>
          </Popover>
        )}
      </Draggable>
    </Styled.Container>
  )
}

export default memo(ListItem)
