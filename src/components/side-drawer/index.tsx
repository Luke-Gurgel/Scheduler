import React from "react"
import * as Styled from "./styled"
import useSideDrawer from "./use-side-drawer"

const SideDrawer = () => {
  const { sideDrawer, theme } = useSideDrawer()

  return (
    <Styled.Drawer open={sideDrawer.open}>
      <Styled.ProfilePicItem>
        <img src="https://i.pravatar.cc/100" alt="user" />
        <span>Thais Marques</span>
      </Styled.ProfilePicItem>
      <a href="/">
        <span role="img" aria-label="add new member">
          🤓
        </span>
        Add new member
      </a>
      <a href="/">
        <span role="img" aria-label="add new member">
          📖
        </span>
        Schedule History
      </a>
      <Styled.ThemeSwitchItem>
        <span>Dark Mode</span>
        <Styled.ThemeSwitch onChange={theme.toggle} checked={theme.darkMode} />
      </Styled.ThemeSwitchItem>
    </Styled.Drawer>
  )
}

export default SideDrawer
