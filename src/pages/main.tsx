import React from "react"
import { dark, light } from "src/themes"
import { useSelector } from "react-redux"
import TopBar from "src/components/topbar"
import { ThemeProps } from "src/types/theme"
import { RootState } from "src/state/root-state"
import styled, { ThemeProvider } from "styled-components"

const View = styled.div`
  min-height: 100vh;
  background-color: ${(props: ThemeProps) => `${props.theme.bg1}`};
`

const Main = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme)

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <View>
        <TopBar />
      </View>
    </ThemeProvider>
  )
}

export default Main
