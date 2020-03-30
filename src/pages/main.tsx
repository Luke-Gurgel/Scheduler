import React from "react"
import { dark, light } from "src/themes"
import { useSelector, useDispatch } from "react-redux"
import SideDrawer from "src/components/side-drawer"
import TopBar from "src/components/topbar"
import Footer from "src/components/footer"
import Schedule from "src/components/schedule"
import MemberList from "src/components/members"
import { RootState } from "src/state/root-state"
import styled, { ThemeProvider } from "styled-components"
import { idSeparator, memberListID } from "src/constants"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { updateWeekDayItemsAction } from "src/state/schedule/actions"
import { ThemeProps, WeekDayItem, ScheduleMemberItem } from "src/types"

const View = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  background-color: ${(props: ThemeProps) => props.theme.bg1};
`

const Main = () => {
  const { theme, schedule, members } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  document.body.style.backgroundColor = theme.darkMode ? dark.bg1 : light.bg1

  const onDragEnd = (res: DropResult) => {
    const { source, destination, draggableId } = res

    if (!destination) {
      return
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    const updatedItems: { [key: string]: WeekDayItem } = {}
    const destItem = schedule.data.weekMap[destination.droppableId]

    const isAddingMemberToItem = source.droppableId === memberListID
    const isDraggingOnSameItem = source.droppableId === destination.droppableId
    const isDraggingToDiffItem = source.droppableId !== destination.droppableId

    if (isAddingMemberToItem) {
      const filtered = destItem.members.filter(
        (mem) =>
          mem.id.split(idSeparator)[1] === draggableId.split(idSeparator)[1],
      )

      if (filtered.length) return

      const member = { ...members.list[source.index] }
      member.id = `${destination.droppableId}${idSeparator}${
        draggableId.split(idSeparator)[1]
      }`

      const destMemberList = [...destItem.members]
      destMemberList.splice(destination.index, 0, member)
      const updatedDestItem = { ...destItem, members: destMemberList }
      updatedItems[destination.droppableId] = updatedDestItem
    } else if (isDraggingToDiffItem) {
      const filtered = destItem.members.filter(
        (mem) =>
          mem.id.split(idSeparator)[1] === draggableId.split(idSeparator)[1],
      )

      if (filtered.length) return

      const sourceItem = schedule.data.weekMap[source.droppableId]
      const member = sourceItem.members.find(
        (mem) => mem.id === draggableId,
      ) as ScheduleMemberItem
      const sourceMemberList = sourceItem.members.filter(
        (_, i) => i !== source.index,
      )
      const updatedSourceItem = { ...sourceItem, members: sourceMemberList }
      updatedItems[source.droppableId] = updatedSourceItem

      const destMemberList = [...destItem.members]
      member.id = `${destination.droppableId}${idSeparator}${
        draggableId.split(idSeparator)[1]
      }`
      destMemberList.splice(destination.index, 0, member)
      const updatedDestItem = { ...destItem, members: destMemberList }
      updatedItems[destination.droppableId] = updatedDestItem
    } else if (isDraggingOnSameItem) {
      const sourceItem = schedule.data.weekMap[source.droppableId]
      const member = sourceItem.members.find(
        (mem) => mem.id === draggableId,
      ) as ScheduleMemberItem
      const updatedMemberList = sourceItem.members.filter(
        (_, i) => i !== source.index,
      )
      updatedMemberList.splice(destination.index, 0, member)
      const updatedItem = { ...sourceItem, members: updatedMemberList }
      updatedItems[source.droppableId] = updatedItem
    }

    dispatch(updateWeekDayItemsAction(updatedItems))
  }

  return (
    <ThemeProvider theme={theme.darkMode ? dark : light}>
      <View>
        <TopBar />
        <DragDropContext onDragEnd={onDragEnd}>
          <Schedule />
          <MemberList />
        </DragDropContext>
        <SideDrawer />
      </View>
      <Footer />
    </ThemeProvider>
  )
}

export default Main
