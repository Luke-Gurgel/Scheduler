import members, { MembersState } from "./state"
import { MembersAction, MembersActionType } from "./actions"

export default function(
  state = members,
  action: MembersActionType,
): MembersState {
  switch (action.type) {
    case MembersAction.ADD_MEMBER:
      return { ...state, list: [...state.list, action.member] }
    case MembersAction.REMOVE_MEMBER:
      const filteredList = state.list.filter(
        (mem) => mem.id !== action.member.id,
      )
      return { ...state, list: filteredList }
    case MembersAction.UPDATE_MEMBER_LIST:
      const updatedList = state.list.map((mem) => {
        return mem.id === action.member.id ? action.member : mem
      })
      return { ...state, list: updatedList }
    case MembersAction.SET_ADD_MEMBER_MODAL_OPEN:
      return {
        ...state,
        addMemberModal: {
          ...state.addMemberModal,
          isOpen: action.isOpen,
        },
      }
    case MembersAction.SET_LOADING:
      return {
        ...state,
        addMemberModal: {
          ...state.addMemberModal,
          loading: action.loading,
        },
      }
    default:
      return state
  }
}
