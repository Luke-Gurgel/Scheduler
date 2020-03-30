import React from "react"
import * as Styled from "./styled"
import { WeekDay } from "src/types"
import addIcon from "src/assets/plus.svg"
import useMemberListPopover from "./use-member-list-popover"

interface Props {
  dayID: WeekDay
}

const MemberListPopover = ({ dayID }: Props) => {
  const { members, addMember, searchTerm, onTextChange } = useMemberListPopover(
    dayID,
  )

  return (
    <Styled.Container>
      <Styled.SearchInput
        type="text"
        value={searchTerm}
        onChange={onTextChange}
        placeholder="Search member"
      />
      <Styled.List>
        {members.map((mem) => (
          <li key={mem.id} onClick={() => addMember(mem)}>
            <div>
              <Styled.ProfilePic src="https://i.pravatar.cc/100" alt="img" />
              <span>{mem.name}</span>
            </div>
            <Styled.AddButton>
              <img src={addIcon} height={15} width={15} alt="" />
            </Styled.AddButton>
          </li>
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default MemberListPopover
