import { Member } from "src/types"

export enum MembersAction {
  ADD_MEMBER = "ADD_MEMBER",
  UPDATE_MEMBER_LIST = "UPDATE_MEMBER_LIST",
  REMOVE_MEMBER = "REMOVE_MEMBER",

  SET_ADD_MEMBER_MODAL_OPEN = "SET_ADD_MEMBER_MODAL_OPEN",
  SET_LOADING = "SET_LOADING",
}

export interface AddMemberAction {
  type: typeof MembersAction.ADD_MEMBER
  member: Member
}

export interface UpdateMemberListAction {
  type: typeof MembersAction.UPDATE_MEMBER_LIST
  member: Member
}

export interface RemoveMemberAction {
  type: typeof MembersAction.REMOVE_MEMBER
  member: Member
}

export interface SetAddMemberModalOpenAction {
  type: typeof MembersAction.SET_ADD_MEMBER_MODAL_OPEN
  isOpen: boolean
}

export interface SetLoadingAction {
  type: typeof MembersAction.SET_LOADING
  loading: boolean
}

export const addMemberAction = (member: Member): AddMemberAction => ({
  member,
  type: MembersAction.ADD_MEMBER,
})

export const updatedMemberListAction = (
  member: Member,
): UpdateMemberListAction => ({
  member,
  type: MembersAction.UPDATE_MEMBER_LIST,
})

export const removeMemberAction = (member: Member): RemoveMemberAction => ({
  member,
  type: MembersAction.REMOVE_MEMBER,
})

export const setAddMemberModalOpenAction = (
  isOpen: boolean,
): SetAddMemberModalOpenAction => ({
  isOpen,
  type: MembersAction.SET_ADD_MEMBER_MODAL_OPEN,
})

export const setLoadingAction = (loading: boolean): SetLoadingAction => ({
  loading,
  type: MembersAction.SET_LOADING,
})

export type MembersActionType =
  | AddMemberAction
  | UpdateMemberListAction
  | RemoveMemberAction
  | SetAddMemberModalOpenAction
  | SetLoadingAction
