import { useState, useEffect } from "react"
import { Member, WeekDay } from "src/types"
import { idSeparator } from "src/constants/id"
import { RootState } from "src/state/root-state"
import { useDispatch, useSelector } from "react-redux"
import { updateWeekDayItemsAction } from "src/state/schedule/actions"

interface UseMemberPopover {
  members: Member[]
  searchTerm: string
  addMember: (member: Member) => void
  onTextChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export default function useMemberPopover(dayID: WeekDay): UseMemberPopover {
  const dispatch = useDispatch()
  const { schedule, members } = useSelector((state: RootState) => state)

  const [searchTerm, setSearchTerm] = useState("")
  const [memberList, setMemberList] = useState([...members.list])

  const addMember = (member: Member) => {
    const destItem = schedule.data.weekMap[dayID]
    const filtered = destItem.members.filter(
      (mem) => mem.id.split(idSeparator)[1] === member.id.split(idSeparator)[1],
    )

    if (filtered.length) return

    const memberCopy = { ...member }
    memberCopy.id = `${dayID}${idSeparator}${member.id.split(idSeparator)[1]}`
    const newMemberList = [...destItem.members, memberCopy]
    const newItem = { ...destItem, members: newMemberList }
    dispatch(updateWeekDayItemsAction({ [dayID]: newItem }))
  }

  const onTextChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value)
  }

  useEffect(() => {
    const filteredMemberList = members.list.filter((mem) =>
      mem.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setMemberList(filteredMemberList)
  }, [searchTerm])

  return {
    addMember,
    searchTerm,
    onTextChange,
    members: memberList,
  }
}
