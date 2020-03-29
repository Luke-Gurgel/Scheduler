import React from "react"
import useTopBar from "./use-topbar"
import * as Styled from "./styled"
import BurgerMenu from "../burger-menu"
import logo from "src/assets/logo.svg"
import dark from "src/assets/dark.svg"
import light from "src/assets/light.svg"

const TopBar = () => {
  const { sideDrawer, theme, openAddMemberModal } = useTopBar()

  return (
    <Styled.Header>
      <Styled.MenuContainer>
        <BurgerMenu open={sideDrawer.open} onClick={sideDrawer.toggle} />
      </Styled.MenuContainer>
      <Styled.FlexContainer>
        <Styled.Img src={logo} alt="logo" />
      </Styled.FlexContainer>
      <Styled.DesktopContainer>
        <Styled.ThemeSwitch
          onChange={theme.toggle}
          checked={theme.darkMode}
          checkedIcon={
            <Styled.SwitchIconContainer>
              <img src={dark} height={16} width={16} />
            </Styled.SwitchIconContainer>
          }
          uncheckedIcon={
            <Styled.SwitchIconContainer>
              <img src={light} height={16} width={16} />
            </Styled.SwitchIconContainer>
          }
        />
        <Styled.Button>Schedule History</Styled.Button>
        <Styled.Button onClick={openAddMemberModal}>Add Member</Styled.Button>
        <Styled.ProfilePic src="https://i.pravatar.cc/100" alt="user" />
      </Styled.DesktopContainer>
    </Styled.Header>
  )
}

export default TopBar
