import { useSelector, useDispatch } from "react-redux"
import { toggleThemeAction } from "src/state/theme/actions"
import { RootState } from "src/state/root-state"

export interface UseSideDrawer {
  sideDrawer: {
    open: boolean
  }
  theme: {
    darkMode: boolean
    toggle: () => void
  }
}

export default function useSideDrawer(): UseSideDrawer {
  const { theme, sideDrawer } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const toggleTheme = () => dispatch(toggleThemeAction())

  return {
    theme: {
      darkMode: theme.darkMode,
      toggle: toggleTheme,
    },
    sideDrawer: {
      open: sideDrawer.open,
    },
  }
}
