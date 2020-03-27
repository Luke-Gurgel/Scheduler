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
import {
  onSingleColumnDrag,
  onDoubleColumnDrag,
} from "src/state/schedule/actions"

const View = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  background-color: ${(props: ThemeProps) => `${props.theme.bg1}`};
`

const Main = () => {
  const { theme, schedule } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const onDragEnd = (res: DropResult) => {
    const { source, destination, draggableId } = res

    if (!destination) return

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    const sourceCol = schedule.data.columns[source.droppableId]
    const destCol = schedule.data.columns[destination.droppableId]

    if (sourceCol === destCol) {
      const newMemberIDs = sourceCol.memberIDs.filter(
        (_, i) => i !== source.index,
      )
      newMemberIDs.splice(destination.index, 0, draggableId)
      const updatedCol = { ...sourceCol, memberIDs: newMemberIDs }
      return dispatch(onSingleColumnDrag(updatedCol))
    }

    const sourceMemberIDs = sourceCol.memberIDs.filter(
      (_, i) => i !== source.index,
    )
    const updatedSourceCol = { ...sourceCol, memberIDs: sourceMemberIDs }

    const destMemberIDs = [...destCol.memberIDs]
    destMemberIDs.splice(destination.index, 0, draggableId)
    const updatedDestCol = { ...destCol, memberIDs: destMemberIDs }

    dispatch(onDoubleColumnDrag(updatedSourceCol, updatedDestCol))
  }

  return (
    <ThemeProvider theme={theme.darkMode ? dark : light}>
      <View>
        <TopBar />
        <DragDropContext
          onDragEnd={onDragEnd}
          onDragStart={() => console.log("dragStart")}
          onDragUpdate={() => console.log("onDragUpdate")}
        >
          <Schedule />
        </DragDropContext>
        <SideDrawer />
      </View>
    </ThemeProvider>
  )
}

export default Main
