import React from "react"
import * as Styled from "./styled"
import { version } from "src/constants"
import useSideDrawer from "./use-side-drawer"

const SideDrawer = () => {
  const { sideDrawer, theme } = useSideDrawer()

  return (
    <Styled.Drawer open={sideDrawer.open}>
      <Styled.ProfilePicItem>
        <img src="https://i.pravatar.cc/100" alt="user" />
        <span>Thais Marques</span>
      </Styled.ProfilePicItem>
      <Styled.RowContainer>
        <a href="/">Add new member</a>
      </Styled.RowContainer>
      <Styled.RowContainer>
        <a href="/">Schedule History</a>
      </Styled.RowContainer>
      <Styled.RowContainer>
        <span>Dark Mode</span>
        <Styled.ThemeSwitch onChange={theme.toggle} checked={theme.darkMode} />
      </Styled.RowContainer>
      <Styled.RowContainer>
        <span>Version</span>
        <span>{version}</span>
      </Styled.RowContainer>
    </Styled.Drawer>
  )
}

export default SideDrawer
