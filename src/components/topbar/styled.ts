import Switch from "react-switch"
import styled from "styled-components"
import { ThemeProps } from "src/types/theme"

export const Header = styled.header`
  height: 10vh;
  display: flex;
  padding: 2vh 5vh;
  align-items: center;
  justify-content: flex-end;
  font-size: calc(10px + 2vmin);
  background-color: ${(props: ThemeProps) => `${props.theme.bg1}`};
`
export const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const MenuContainer = styled(FlexContainer)`
  @media screen and (min-width: 650px) {
    display: none;
  }
`

export const DesktopContainer = styled.div`
  display: flex;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const Img = styled.img`
  width: 5vh;
  height: 5vh;
`

export const ProfilePic = styled(Img)`
  border-radius: 2.5vh;
`

export const Button = styled.button`
  border: none;
  margin-right: 20px;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px;
  border-radius: 12px;
  transition: all 0.4s;
  text-decoration: none;
  background-color: transparent;
  color: ${(props: ThemeProps) => `${props.theme.txt1}`};

  :hover {
    background-color: ${(props: ThemeProps) => `${props.theme.bg2}`};
  }

  :focus {
    outline: 0;
  }

  :active {
    top: 1px;
    position: relative;
  }
`

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuButtonDash = styled.div`
  width: 25px;
  height: 2px;
  margin: 2px 0;
  border-radius: 10px;
  transition-duration: 0.3s;
  background-color: ${(props: ThemeProps) => `${props.theme.txt1}`};

  &.one.on {
    transform: rotate(45deg) translate(3px, 8px);
  }

  &.two.on {
    opacity: 0;
  }

  &.three.on {
    transform: rotate(-45deg) translate(1px, -5px);
  }
`

export const ThemeSwitch = styled(Switch).attrs((props: ThemeProps) => ({
  width: 50,
  height: 25,
  handleDiameter: 30,
  offColor: props.theme.bg3,
  offHandleColor: props.theme.bg1,
  onColor: props.theme.primary,
  onHandleColor: props.theme.primary100,
  boxShadow: "0px 1px 5px rgba(80, 80, 80, 0.6)",
  activeBoxShadow: "0px 0px 1px 8px rgba(0, 0, 0, 0.2)",
}))`
  margin-top: 10px;
  margin-right: 20px;
`

export const SwitchIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2px;
  font-size: 15;
  height: 100%;
`
