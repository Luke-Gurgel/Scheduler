import React from "react"
import { dark, light } from "src/themes"
import { useSelector, useDispatch } from "react-redux"
import SideDrawer from "src/components/side-drawer"
import TopBar from "src/components/topbar"
import Schedule from "src/components/schedule"
import { ThemeProps } from "src/types/theme"
import { RootState } from "src/state/root-state"
import styled, { ThemeProvider } from "styled-components"
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { onSameListDrag, onDiffListDrag } from "src/state/schedule/actions"

const View = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  background-color: ${(props: ThemeProps) => props.theme.bg1};
`

const Main = () => {
  const { theme, schedule } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  document.body.style.backgroundColor = theme.darkMode ? dark.bg1 : light.bg1

  const onDragEnd = (res: DropResult) => {
    const { source, destination, draggableId } = res

    if (!destination) return

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    const sourceList = schedule.data.lists[source.droppableId]
    const destList = schedule.data.lists[destination.droppableId]

    if (sourceList === destList) {
      const newMemberIDs = sourceList.memberIDs.filter(
        (_, i) => i !== source.index,
      )
      newMemberIDs.splice(destination.index, 0, draggableId)
      const updatedList = { ...sourceList, memberIDs: newMemberIDs }
      return dispatch(onSameListDrag(updatedList))
    }

    const sourceMemberIDs = sourceList.memberIDs.filter(
      (_, i) => i !== source.index,
    )
    const updatedSourceList = { ...sourceList, memberIDs: sourceMemberIDs }

    const destMemberIDs = [...destList.memberIDs]
    destMemberIDs.splice(destination.index, 0, draggableId)
    const updatedDestList = { ...destList, memberIDs: destMemberIDs }

    dispatch(onDiffListDrag(updatedSourceList, updatedDestList))
  }

  return (
    <ThemeProvider theme={theme.darkMode ? dark : light}>
      <View>
        <TopBar />
        <DragDropContext onDragEnd={onDragEnd}>
          <Schedule />
        </DragDropContext>
        <SideDrawer />
      </View>
    </ThemeProvider>
  )
}

export default Main
