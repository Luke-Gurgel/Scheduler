import { useSelector, useDispatch } from "react-redux"
import { toggleThemeAction } from "src/state/theme/actions"
import { toggleSideDrawerAction } from "src/state/side-drawer/actions"
import { RootState } from "src/state/root-state"

export interface UseTopBar {
  sideDrawer: {
    open: boolean
    toggle: () => void
  }
  theme: {
    darkMode: boolean
    toggle: () => void
  }
}

export default function useTopBar(): UseTopBar {
  const { theme, sideDrawer } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const toggleTheme = () => dispatch(toggleThemeAction())

  const toggleSideDrawer = () => {
    document.body.style.overflow = sideDrawer.open ? "scroll" : "hidden"
    dispatch(toggleSideDrawerAction())
  }

  return {
    theme: {
      darkMode: theme.darkMode,
      toggle: toggleTheme,
    },
    sideDrawer: {
      open: sideDrawer.open,
      toggle: toggleSideDrawer,
    },
  }
}
