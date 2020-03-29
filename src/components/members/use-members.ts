import { useEffect, useRef } from "react"
import { Member } from "src/types"
import { RootState } from "src/state/root-state"
import { useSelector, useDispatch } from "react-redux"
import { setAddMemberModalOpenAction } from "src/state/members/actions"

interface UseMembers {
  members: Member[]
  bottomRef: React.MutableRefObject<HTMLDivElement | null>
  openAddMemberModal: () => void
}

export default function useMembers(): UseMembers {
  const bottomRef = useRef() as React.MutableRefObject<HTMLDivElement | null>

  const dispatch = useDispatch()
  const { list } = useSelector((state: RootState) => state.members)

  const openAddMemberModal = () => {
    dispatch(setAddMemberModalOpenAction(true))
  }

  useEffect(() => {
    console.log("list updated")
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [list])

  return {
    members: list,
    openAddMemberModal,
    bottomRef,
  }
}
