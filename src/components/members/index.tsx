import React from "react"
import * as Styled from "./styled"
import ListItem from "./list-item"
import useMembers from "./use-members"
import { memberListID } from "src/types"
import addIcon from "src/assets/plus.svg"
import { Droppable } from "react-beautiful-dnd"
import AddMemberModal from "./add-member-modal"

const MemberList = () => {
  const { members, openAddMemberModal, bottomRef } = useMembers()

  const renderMembers = () =>
    members.map((member, i) => (
      <ListItem member={member} index={i} key={member.id} />
    ))

  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <h1>Members</h1>
        <Styled.AddButton onClick={openAddMemberModal}>
          <img src={addIcon} height={15} width={15} alt="" />
        </Styled.AddButton>
      </Styled.HeaderContainer>
      <Droppable
        isDropDisabled
        direction="horizontal"
        droppableId={memberListID}
      >
        {(provided) => (
          <Styled.ListContainer
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {renderMembers()}
          </Styled.ListContainer>
        )}
      </Droppable>
      <AddMemberModal />
      <div ref={bottomRef} style={{ float: "left", clear: "both" }} />
    </Styled.Container>
  )
}

export default MemberList
