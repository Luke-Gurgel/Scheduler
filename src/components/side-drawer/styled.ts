import Switch from "react-switch"
import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const Drawer = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  width: 60vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  text-align: left;
  padding-top: 15vh;
  position: absolute;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  background: ${(props: ThemeProps) => `${props.theme.bg3}`};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  img {
    width: 10vh;
    height: 10vh;
    border-radius: 5vh;
  }

  a {
    margin: 10px 0;
    font-size: 1rem;
    padding: 10px 0;
    user-select: none;
    font-weight: bold;
    border-radius: 8px;
    text-decoration: none;
    transition: color 0.2s linear;
    color: ${({ theme }) => theme.txt1};

    :active {
      background-color: ${(props: ThemeProps) => `${props.theme.bg4}`};
    }

    span {
      padding-right: 10px;
    }
  }
`

export const ProfilePicItem = styled.div`
  display: flex;
  padding: 5vh 0;
  align-items: center;
  flex-direction: column;

  span {
    margin-top: 8px;
    font-weight: bold;
    color: ${(props: ThemeProps) => `${props.theme.txt3}`};
  }
`

export const ThemeSwitchItem = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    color: ${(props: ThemeProps) => `${props.theme.txt1}`};
  }
`

export const ThemeSwitch = styled(Switch).attrs((props: ThemeProps) => ({
  width: 50,
  height: 25,
  handleDiameter: 30,
  checkedIcon: false,
  uncheckedIcon: false,
  offColor: props.theme.bg4,
  onColor: props.theme.primary,
  offHandleColor: props.theme.bg1,
  onHandleColor: props.theme.primary100,
  boxShadow: "0px 1px 5px rgba(80, 80, 80, 0.6)",
  activeBoxShadow: "0px 0px 1px 8px rgba(0, 0, 0, 0.2)",
}))``

export const SwitchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2px;
  height: 100%;
`
