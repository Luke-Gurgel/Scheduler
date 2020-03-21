import React, { useState } from "react"
import useTopBar from "./use-topbar"
import * as Styled from "./styled"
import logo from "src/assets/logo.svg"
import dark from "src/assets/dark.svg"
import light from "src/assets/light.svg"

const TopBar = () => {
  const { darkMode, toggleTheme } = useTopBar()
  const [on, setOn] = useState(false)

  const toggleMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    setOn(!on)
  }

  return (
    <Styled.Header>
      <Styled.MenuContainer>
        <Styled.MenuButton onClick={toggleMenu}>
          <Styled.MenuButtonDash className={`one ${on ? "on" : ""}`} />
          <Styled.MenuButtonDash className={`two ${on ? "on" : ""}`} />
          <Styled.MenuButtonDash className={`three ${on ? "on" : ""}`} />
        </Styled.MenuButton>
      </Styled.MenuContainer>
      <Styled.FlexContainer>
        <Styled.Img src={logo} alt="logo" />
      </Styled.FlexContainer>
      <Styled.DesktopContainer>
        <Styled.ThemeSwitch
          checked={darkMode}
          onChange={toggleTheme}
          className="theme-switch"
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
        <Styled.Button>Add Member</Styled.Button>
        <Styled.ProfilePic src="https://i.pravatar.cc/100" alt="user" />
      </Styled.DesktopContainer>
    </Styled.Header>
  )
}

export default TopBar
