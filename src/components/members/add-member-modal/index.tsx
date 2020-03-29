import React from "react"
import * as Styled from "./styled"
import { emailValidation } from "src/constants"
import { ClapSpinner } from "react-spinners-kit"
import useAddMemberModal from "./use-add-member-modal"
import "rodal/lib/rodal.css"

const AddMemberModal = () => {
  const { form, isOpen, loading, onSubmit, cancel } = useAddMemberModal()

  return (
    <Styled.Modal visible={isOpen} onClose={loading ? () => {} : cancel}>
      <Styled.Container>
        <h2>Add a new member</h2>
        <form>
          <Styled.InputContainer>
            <label htmlFor="name">Name (required)</label>
            <Styled.Input
              type="text"
              name="name"
              placeholder="Name"
              ref={form.register({ required: "Name is required" })}
            />
            <span className="error">{form.errors.name?.message}</span>
          </Styled.InputContainer>
          <Styled.InputContainer>
            <label htmlFor="email">Email (optional)</label>
            <Styled.Input
              type="email"
              name="email"
              placeholder="Email"
              ref={form.register({ required: false, ...emailValidation })}
            />
            <span className="error">{form.errors.email?.message}</span>
          </Styled.InputContainer>
        </form>
        <Styled.ButtonsContainer>
          <button onClick={loading ? () => {} : cancel}>Cancel</button>
          <button onClick={onSubmit}>
            <span>Add member</span>
            <ClapSpinner loading={loading} size={15} />
          </button>
        </Styled.ButtonsContainer>
      </Styled.Container>
    </Styled.Modal>
  )
}

export default AddMemberModal
