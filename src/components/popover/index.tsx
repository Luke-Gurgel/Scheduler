import React from "react"
import * as Styled from "./styled"
import { emailValidation } from "src/constants"
import useMemberPopover from "./use-member-popover"
import { ScheduleMemberItem, popoverSource } from "src/types"

interface Props {
  member: ScheduleMemberItem
  source: popoverSource
  close: () => void
}

const MemberPopover = ({ member, close, source }: Props) => {
  const { form, onUpdate } = useMemberPopover(member, source)

  const updateMember = () => {
    onUpdate()
    close()
  }

  return (
    <Styled.Container>
      <Styled.ProfilePic src="https://i.pravatar.cc/100" alt="user" />
      <Styled.RowContainer>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          defaultValue={member.name}
          ref={form.register({ required: true })}
        />
      </Styled.RowContainer>
      <Styled.RowContainer>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Add email"
          defaultValue={member.email}
          ref={form.register({ required: false, ...emailValidation })}
        />
      </Styled.RowContainer>
      {source === "schedule" && (
        <>
          <Styled.RowContainer>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              name="role"
              ref={form.register()}
              placeholder="Add role"
              defaultValue={member.role}
            />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <label htmlFor="start">Start</label>
            <input
              type="text"
              name="start"
              ref={form.register()}
              defaultValue={member.start}
              placeholder="Add start time"
            />
          </Styled.RowContainer>
          <Styled.RowContainer>
            <label htmlFor="end">End</label>
            <input
              name="end"
              type="text"
              ref={form.register()}
              defaultValue={member.end}
              placeholder="Add end time"
            />
          </Styled.RowContainer>
        </>
      )}
      <Styled.UpdateButton onClick={updateMember}>Update</Styled.UpdateButton>
    </Styled.Container>
  )
}

export default MemberPopover
