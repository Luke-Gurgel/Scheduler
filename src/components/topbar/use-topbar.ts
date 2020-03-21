import { useSelector, useDispatch } from "react-redux"
import { toggleAction } from "src/state/theme/actions"
import { RootState } from "src/state/root-state"

export interface UseTopBar {
  darkMode: boolean
  toggleTheme: () => void
}

export default function useTopBar(): UseTopBar {
  const { darkMode } = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const toggleTheme = () => dispatch(toggleAction())

  return {
    darkMode,
    toggleTheme,
  }
}
