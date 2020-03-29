import { Member } from "src/types"

export interface MembersState {
  list: Member[]
  addMemberModal: {
    isOpen: boolean
    loading: boolean
  }
}

const memberState: MembersState = {
  list: [],
  addMemberModal: {
    isOpen: false,
    loading: false,
  },
}

export default memberState
